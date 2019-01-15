import 'jest';
import * as mockery from 'mockery';
import * as request from 'request-promise-native';

import { IConfiguration } from '../classes/config';
import { Environment } from '../classes/environment';
import * as helpers from '../helpers/helpers';
import { Amazon } from '../lib/amazon';

jest.mock('request');

describe('Amazon', () => {
  let amazon: Amazon;
  const config: IConfiguration = {
    clientId: 'clientId',
    environment: new Environment('https://api.amazon.com', 'https://api.amazon.com', 'https://api.amazon.com'),
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
});
