import { BadToken } from '../classes/error';
import { Amazon } from './amazon';

export class Api extends Amazon {
  public async getTokenInfo(accessToken: string) {
    try {
      const tokenInfo = await this.callApiMethod('auth/o2/tokeninfo', accessToken);
      if (tokenInfo.aud !== this.config.clientId) {
        throw new BadToken('Token does not belong to us', tokenInfo);
      }
      return tokenInfo;
    } catch (err) {
      throw err;
    }
  }

  public async getProfile(accessToken: string) {
    try {
      await this.getTokenInfo(accessToken);
      return this.callApiMethod('user/profile', accessToken);
    } catch (err) {
      throw err;
    }
  }
}
