const request = require('request-promise-native');
const crypto = require('crypto');
const URL = require('url');
const util = require('util');
const xml2js = require('xml2js');

const error = require('./error');
const { OffAmazonPayments } = require('./offAmazonPayments');
const { Reports } = require('./reports');
const { Api } = require('./api');

class Amazon {
  constructor(config) {
    this.config = config;
    this.debug = config.debug;

    this.callApiMethod = callApiMethod;
    this.callMwsMethod = callMwsMethod;

    this.offAmazonPayments = new OffAmazonPayments(this);
    this.reports = new Reports(this);
    this.parseSNSResponse = parseSNSResponse;
    this.api = new Api(this);
  }
}

async function callApiMethod(action, accessToken) {
  const opts = {
    url: `${this.config.environment.apiEndpoint}/${action}`,
    method: 'get',
    qs: {
      access_token: accessToken,
    },

  };

  try {
    const response = parseApiResponse(await request(opts));
    if (response instanceof Error) return Promise.reject(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function callMwsMethod(method, version, params) {
  const url = this.config.environment.mwsEndpoint;
  const required = {
    AWSAccessKeyId: this.config.mwsAccessKey,
    Action: method,
    SellerId: this.config.sellerId,
    Timestamp: new Date().toISOString(),
    Version: version,
  };

  params = composeParams(params);
  for (const k in required) {
    if (!params[k]) {
      params[k] = required[k];
    }
  }

  params = attachSignature(url, this.config.mwsSecretKey, params);
  const opts = {
    url,
    method: 'post',
    form: params,
    resolveWithFullResponse: true,
  };

  try {
    const response = await parseMwsResponse(method, await request(opts));
    if (response instanceof Error) return Promise.reject(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

function composeParams(params, label, composed) {
  composed = safeObjectCast(composed);
  params = safeObjectCast(params);

  Object.keys(params).forEach((key) => {
    const value = params[key];
    const newLabel = label ? `${label}.${key}` : key;

    if (isObject(value)) {
      composeParams(value, newLabel, composed);
    } else {
      composed[newLabel] = value;
    }
  });

  return composed;
}

function attachSignature(url, secret, params) {
  params.SignatureMethod = 'HmacSHA256';
  params.SignatureVersion = '2';

  const sortedParams = Object.keys(params).sort((a, b) => (a === b ? 0 : a < b ? -1 : 1)).map(key => `${RFC3986Encode(key)}=${RFC3986Encode(params[key])}`).join('&');

  const parsedUrl = URL.parse(url);

  const hmac = crypto.createHmac('SHA256', secret);
  const stringToSign = [
    'POST',
    parsedUrl.hostname,
    (parsedUrl.pathname || '/'),
    sortedParams,
  ].join('\n');
  hmac.update(stringToSign);
  params.Signature = hmac.digest('base64');
  return params;
}

function RFC3986Encode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16)}`);
}

/**
 * Parse the MWS response.
 *
 * @param {string} method
 * @param {Object[]} response
 */
async function parseMwsResponse(method, response) {
  try {
    // if it's XML, then we an parse correctly
    if (response.headers && response.headers['content-type'] === 'text/xml') {
      const xml2jsPromise = util.promisify(xml2js.parseString);
      const result = await xml2jsPromise(response.body, { explicitArray: false });
      if (result.ErrorResponse) {
        const apiError = result.ErrorResponse.Error;
        return Promise.reject(error.apiError(apiError.Code, apiError.Message, result));
      }
      return new Response(method, result);
    }
    return new Response(method, { Response: response.body });
  } catch (err) {
    return Promise.reject(error);
  }
}

function parseApiResponse(response) {
  let parsed;
  try {
    parsed = JSON.parse(response);
  } catch (e) {
    return error.parseError('Could not parse Amazon response.', response);
  }

  if (parsed.error) {
    return error.apiError(parsed.error, parsed.error_description, parsed);
  }
  return parsed;
}

async function parseSNSResponse(response) {
  const defaultHostPattern = /^sns\.[a-zA-Z0-9-]{3,}\.amazonaws\.com(\.cn)?$/;
  const required = [
    'Message',
    'MessageId',
    'SignatureVersion',
    'Signature',
    'SigningCertURL',
    'Timestamp',
    'TopicArn',
    'Type',
  ];
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

  for (let i = 0; i < required.length; i += 1) {
    if (!response[required[i]]) {
      return Promise.reject(error.missingParameter(`Missing parameter on SNS response: ${required[i]}`));
    }
  }

  if (response.SignatureVersion !== 1 && response.SignatureVersion !== '1') {
    return Promise.reject(error.invalidSignatureVersion(`Unknown SNS Signature version: ${response.SignatureVersion}`));
  }

  const verifier = crypto.createVerify('SHA1');
  signable.forEach((key) => {
    if (response[key]) {
      verifier.update(`${key}\n${response[key]}\n`);
    }
  });

  const parsed = URL.parse(response.SigningCertURL);
  if (parsed.protocol !== 'https:' || parsed.path.substr(-4) !== '.pem' || !defaultHostPattern.test(parsed.host)) {
    return Promise.reject(error.invalidCertificateDomain('The certificate is located on an invalid domain.'));
  }

  const opts = {
    url: response.SigningCertURL,
    method: 'get',
    resolveWithFullResponse: true,
  };

  try {
    const res = await request(opts);
    const isValid = verifier.verify(res.body, response.Signature, 'base64');
    if (!isValid) return Promise.reject(error.signatureMismatch('Signature mismatch, unverified response'));
    if (response.Type !== 'Notification') return response;
    return await parseIPNMessage(response.Message);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function parseIPNMessage(message) {
  message = safeJSONParse(message);
  if (!isObject(message) || !message.NotificationData) {
    return message;
  }

  const type = message.NotificationType;
  const xmlKeys = {
    PaymentRefund: ['RefundNotification', 'RefundDetails'],
    PaymentCapture: ['CaptureNotification', 'CaptureDetails'],
    PaymentAuthorize: ['AuthorizationNotification', 'AuthorizationDetails'],
    OrderReferenceNotification: ['OrderReferenceNotification', 'OrderReference'],
    BillingAgreementNotification: ['BillingAgreementNotification', 'BillingAgreement'],
  };

  try {
    const xml2jsPromise = util.promisify(xml2js.parseString);
    const result = await xml2jsPromise(message.NotificationData, { explicitArray: false });
    const keys = xmlKeys[type] || [];
    message.NotificationData = new Response(type, result, keys[0], keys[1]);
    return message;
  } catch (error) {
    return Promise.reject(error);
  }
}

function Response(method, rawResponse, primaryKey, subKey) {
  primaryKey = primaryKey || `${method}Response`;
  subKey = subKey || `${method}Result`;
  if (!rawResponse[primaryKey]) {
    return rawResponse;
  }

  const _response = rawResponse[primaryKey];
  const _result = _response[subKey];

  if (_response.ResponseMetadata) {
    Object.defineProperty(this, 'requestId', {
      enumerable: false,
      get() {
        return _response.ResponseMetadata.RequestId;
      },
    });
  }

  return _result;
}

function safeJSONParse(data) {
  let parsed;
  try {
    parsed = JSON.parse(data);
  } catch (e) {
    parsed = data;
  }
  return parsed;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function safeObjectCast(obj) {
  if (!isObject(obj)) {
    return {};
  }
  return obj;
}

exports.Amazon = Amazon;

// exposing these methods so they can be tested
exports.composeParams = composeParams;
exports.attachSignature = attachSignature;
exports.parseSNSResponse = parseSNSResponse;
