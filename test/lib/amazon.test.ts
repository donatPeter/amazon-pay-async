import 'jest';
import * as mockery from 'mockery';
import * as request from 'request-promise-native';

import { EnvironmentEnum } from '../../classes/environment';
import * as helpers from '../../helpers/helpers';
import { Amazon } from '../../lib/amazon';
import { ISNSResponse } from '../../types/sns.response.type';

jest.mock('request');

describe('Amazon', () => {
  let amazon: Amazon;
  const config = {
    clientId: 'clientId',
    environment: EnvironmentEnum.SandboxEU,
    mwsAccessKey: 'mwsAccessKey',
    mwsSecretKey: 'mwsSecretKey',
    sellerId: 'sellerId',
  };

  beforeAll((done) => {
    amazon = new Amazon(config);
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false,
    });

    mockery.registerMock('request-promise', () => {
      const response = { test: 'ok' };
      return Promise.resolve(JSON.stringify(response));
    });

    done();
  });

  afterAll((done) => {
    mockery.disable();
    mockery.deregisterAll();
    done();
  });

  describe('callApiMethod', () => {
    it('should attach the params to the request', async () => {
      const spy = jest.spyOn(request, 'get').mockResolvedValue(JSON.stringify({ test: 'ok' }));
      try {
        await amazon.callApiMethod('action', { param: 'param' }, 'bearer');
      } catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
      }
      expect(spy).toHaveBeenCalledWith({
        headers: { Authorization: 'bearer bearer' },
        method: 'get',
        qs: { param: 'param' },
        resolveWithFullResponse: false,
        url: 'https://api.sandbox.amazon.com/action',
      });
    });

    it('should throw a parse_error error if the response is not parsable', async () => {
      jest.spyOn(request, 'get').mockResolvedValue('');
      let error: any;
      try {
        await amazon.callApiMethod('action', { param: 'param' }, 'bearer');
      } catch (err) {
        error = err;
      }
      expect(error.message).toBe('Could not parse Amazon response.');
      expect(error.type).toBe('parse_error');
    });

    it('should throw an error if the response is an error message', async () => {
      jest.spyOn(request, 'get').mockResolvedValue(JSON.stringify({ error: 'error value' }));
      let error: any;
      try {
        await amazon.callApiMethod('action', { param: 'param' }, 'bearer');
      } catch (err) {
        error = err;
      }
      expect(error.type).toBe('error value');
    });
  });

  describe('callMwsMethod', () => {
    it('should call the composeParams helper method to build up the request object', async () => {
      jest.spyOn(request, 'post').mockResolvedValue({
        headers: {
          'content-type': 'application/json',
        },
      });
      const spy = jest.spyOn(helpers, 'composeParams');
      await amazon.callMwsMethod('action', 'version', {});

      expect(spy).toBeCalledTimes(1);
    });

    it('should call the attachSignature helper method to build up the request object', async () => {
      jest.spyOn(request, 'post').mockResolvedValue({
        headers: {
          'content-type': 'application/json',
        },
      });
      const spy = jest.spyOn(helpers, 'attachSignature');
      await amazon.callMwsMethod('action', 'version', {});

      expect(spy).toBeCalledTimes(1);
    });
  });

  describe('parseSNSResponse', () => {
    it('should return with invalid_signature_version error if the signature version is not equal 1', async () => {
      jest.spyOn(request, 'get').mockResolvedValue(JSON.stringify({ test: 'ok' }));
      const response: ISNSResponse = {
        Message: 'A message for you!',
        MessageId: '1',
        Signature: 'gibberish',
        SignatureVersion: '2',
        SigningCertURL: 'https://sns.us-east-1.notamazonaws.com/cert.pem',
        Timestamp: (new Date()).toISOString(),
        TopicArn: 'arn',
        Type: 'Notification',
      };
      try {
        await amazon.parseSNSResponse(response);
      } catch (err) {
        expect(err.type).toBe('invalid_signature_version');
      }
    });

    it('should return with invalid_certificate_domain error if the certificate is hosted on an invalid host', async () => {
      const response: ISNSResponse = {
        Message: 'A message for you!',
        MessageId: '1',
        Signature: 'gibberish',
        SignatureVersion: '1',
        SigningCertURL: 'https://sns.us-east-1.notamazonaws.com/cert.pem',
        Timestamp: (new Date()).toISOString(),
        TopicArn: 'arn',
        Type: 'Notification',
      };
      try {
        await amazon.parseSNSResponse(response);
      } catch (err) {
        expect(err.type).toBe('invalid_certificate_domain');
      }
    });
  });
});
