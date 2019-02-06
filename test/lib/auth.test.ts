import 'jest';
import { EnvironmentEnum, IConfiguration } from '../../classes/config';
import { Amazon } from '../../lib/amazon';
import { Auth } from '../../lib/auth';
import { ITokenInformationResponse } from '../../types/token.information.type';

const config: IConfiguration = {
  clientId: 'clientId',
  environment: EnvironmentEnum.SandboxEU,
  mwsAccessKey: 'mwsAccessKey',
  mwsSecretKey: 'mwsSecretKey',
  sellerId: 'sellerId',
};

describe('Auth', () => {
  let auth: Auth;
  beforeEach(() => {
    auth = new Auth(config);
  });

  describe('getTokenInfo', () => {
    it('should call the callApiMethod method once with the proper parameters', async () => {
      const spy = jest.spyOn(Amazon.prototype, 'callApiMethod').mockResolvedValue({
        aud: 'clientId',
      } as ITokenInformationResponse);
      auth.getTokenInfo('token');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('auth/o2/tokeninfo', { access_token: 'token' });
    });

    it('should throw an error if the results aud not equal with the client id', async () => {
      jest.spyOn(Amazon.prototype, 'callApiMethod').mockResolvedValue({
        aud: 'anotherClientId',
      } as ITokenInformationResponse);

      let error: any;
      try {
        await auth.getTokenInfo('token');
      } catch (err) {
        error = err;
      } finally {
        expect(error.type).toBe('bad_token');
        expect(error.message).toBe('Token does not belong to us');
      }
    });
  });

  describe('getProfile', () => {
    it('should call the getTokenInfo to verify the token parameter', async () => {
      const spy = jest.spyOn(Auth.prototype, 'getTokenInfo').mockResolvedValue({});
      await auth.getProfile('token');

      expect(spy).toHaveBeenCalled();
    });

    it('should call the callApiMethod method once with the proper parameters', async () => {
      const spy = jest.spyOn(Amazon.prototype, 'callApiMethod').mockResolvedValue({
        aud: 'clientId',
      } as ITokenInformationResponse);
      await auth.getProfile('token');

      expect(spy).toHaveBeenLastCalledWith('user/profile', undefined, 'token');
    });

    it('should rethrow the error in case of failure for an internal call', async () => {
      jest.spyOn(Auth.prototype, 'getTokenInfo').mockRejectedValue(new Error('re-throwed error message'));

      let error: any;
      try {
        await auth.getProfile('token');
      } catch (err) {
        error = err;
      }
      expect(error.message).toBe('re-throwed error message');
    });
  });
});
