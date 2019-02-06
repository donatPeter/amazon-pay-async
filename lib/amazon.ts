import * as crypto from 'crypto';
import * as request from 'request-promise-native';
import { Options } from 'request-promise-native';
import * as URL from 'url';
import * as xml2js from 'xml2js';

import { Config, IConfiguration } from '../classes/config';
import {
  ApiError,
  InvalidCertificateDomain,
  InvalidSignatureVersion,
  ParseError,
  SignatureMismatch,
} from '../classes/error';
import { AmazonResponse } from '../classes/response';
import { attachSignature, composeParams, isObject, safeJSONParse } from '../helpers/helpers';
import { ISNSResponse } from '../types';

interface IObject {
  [key: string]: any;
}

export class Amazon {
  public config: Config;

  constructor(config: IConfiguration) {
    this.config = new Config(config);
  }

  public async callApiMethod(action: string, params?: IObject, bearer?: string) {
    const opts: Options = {
      method: 'get',
      resolveWithFullResponse: false,
      url: `${this.config.environment.apiEndpoint}/${action}`,
    };

    if (params) {
      opts.qs = params;
    }

    if (bearer) {
      opts.headers = {
        Authorization: `bearer ${bearer}`,
      };
    }

    try {
      const resultBody = await request.get(opts);
      const response = this.parseApiResponse(resultBody);
      return response;
    } catch (err) {
      throw err;
    }
  }

  public async callMwsMethod(method: string, version: string, params?: IObject) {
    try {
      const url = this.config.environment.mwsEndpoint;
      const required: IObject = {
        AWSAccessKeyId: this.config.mwsAccessKey,
        Action: method,
        SellerId: this.config.sellerId,
        Timestamp: new Date().toISOString(),
        Version: version,
      };

      if (params) {
        params = composeParams(params);
      }

      for (const k in required) {
        if (params && !params.hasOwnProperty(k)) {
          params[k] = required[k];
        }
      }

      params = attachSignature(url, this.config.mwsSecretKey, params);
      const opts = {
        form: params,
        method: 'post',
        resolveWithFullResponse: true,
        url,
      };

      const result = await request.post(opts);
      const response = await this.parseMwsResponse(method, result);
      return response;
    } catch (err) {
      throw err;
    }
  }

  public async parseSNSResponse(response: ISNSResponse) {
    try {
      const defaultHostPattern = /^sns\.[a-zA-Z0-9-]{3,}\.amazonaws\.com(\.cn)?$/;
      const signable = [
        'Message',
        'MessageId',
        'Subject',
        'SubscribeURL',
        'Timestamp',
        'Token',
        'TopicArn',
        'Type',
      ];

      if (response.SignatureVersion !== '1') {
        throw new InvalidSignatureVersion(`Unknown SNS Signature version: ${response.SignatureVersion}`);
      }

      const verifier = crypto.createVerify('SHA1');
      signable.forEach((key) => {
        if (response[key]) {
          verifier.update(`${key}\n${response[key]}\n`);
        }
      });

      const parsed = URL.parse(response.SigningCertURL);
      if (parsed.protocol !== 'https:' ||
        (parsed.path && parsed.path.substr(-4) !== '.pem') ||
        (parsed.host && !defaultHostPattern.test(parsed.host))) {
        throw new InvalidCertificateDomain('The certificate is located on an invalid domain.');
      }

      const opts = {
        method: 'get',
        resolveWithFullResponse: true,
        url: response.SigningCertURL,
      };

      const res = await request.get(opts);
      const isValid = verifier.verify(res.body, response.Signature, 'base64');
      if (!isValid) {
        throw new SignatureMismatch('Signature mismatch, unverified response');
      }
      if (response.Type !== 'Notification') {
        return response;
      }
      return await this.parseIPNMessage(response.Message);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private async parseMwsResponse(method: string, response: any): Promise<any> {
    // if it's XML, then we parse it correctly
    if ((response.headers && response.headers['content-type'] === 'text/xml') || response.error) {
      const result: AmazonResponse = await this.parseString(response);
      return result;
    } else {
      return new AmazonResponse(method, { Response: response.body }).response;
    }
  }

  private async parseIPNMessage(message: any) {
    message = safeJSONParse(message);
    if (!isObject(message) || !message.NotificationData) {
      return message;
    }

    const type = message.NotificationType;
    const xmlKeys: IObject = {
      BillingAgreementNotification: ['BillingAgreementNotification', 'BillingAgreement'],
      OrderReferenceNotification: ['OrderReferenceNotification', 'OrderReference'],
      PaymentAuthorize: ['AuthorizationNotification', 'AuthorizationDetails'],
      PaymentCapture: ['CaptureNotification', 'CaptureDetails'],
      PaymentRefund: ['RefundNotification', 'RefundDetails'],
    };

    try {
      const result = await this.parseString(message.NotificationData);
      const keys = xmlKeys[type] || [];
      message.NotificationData = new AmazonResponse(type, result, keys[0], keys[1]);
      return message;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private parseApiResponse(response: string) {
    let parsed: any;
    try {
      parsed = JSON.parse(response);
    } catch (e) {
      throw new ParseError('Could not parse Amazon response.', response);
    }
    if (parsed.error) {
      throw new ApiError(parsed.error, parsed.error_description, parsed);
    }
    return parsed;
  }

  private parseString(response: any): Promise<any> {
    return new Promise((resolve, reject) => {
      xml2js.parseString(response.body, { explicitArray: false }, (err, res) => {
        if (err) {
          reject(err);
        }

        if (res.ErrorResponse) {
          err = {
            code: 'Unknown',
            message: 'Unknown MWS error',
          };

          if (res.ErrorResponse.Error) {
            err = res.ErrorResponse.Error;
          }
          resolve(new ApiError(err.code, err.message, res));
        }

        resolve(res);
      });
    });
  }
}
