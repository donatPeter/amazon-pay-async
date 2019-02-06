import { IConfiguration } from '../classes/config';
import { BadToken } from '../classes/error';
import { ITokenInformationResponse } from '../types/token.information.type';
import { Amazon } from './amazon';

export class Auth {
  private readonly requestHandler: Amazon;
  constructor(config: IConfiguration) {
    this.requestHandler = new Amazon(config);
  }

  public async getTokenInfo(accessToken: string): Promise<ITokenInformationResponse> {
    try {
      const tokenInfo: ITokenInformationResponse = await this.requestHandler
        .callApiMethod('auth/o2/tokeninfo', { access_token: accessToken });
      if (tokenInfo.aud !== this.requestHandler.config.clientId) {
        throw new BadToken('Token does not belong to us');
      }
      return tokenInfo;
    } catch (err) {
      throw err;
    }
  }

  public async getProfile(accessToken: string) {
    try {
      await this.getTokenInfo(accessToken);
      return this.requestHandler.callApiMethod('user/profile', undefined, accessToken);
    } catch (err) {
      throw err;
    }
  }
}
