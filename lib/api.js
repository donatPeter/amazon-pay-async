const error = require('./error');

class Api {
  constructor(_super) {
    this._super = _super;
  }

  async getTokenInfo(accessToken) {
    return this._super.callApiMethod('auth/o2/tokeninfo', accessToken)
      .then((tokenInfo) => {
        if (tokenInfo.aud !== this._super.config.clientId) {
          return (error.badToken('Token does not belong to us', tokenInfo));
        }
        return tokenInfo;
      })
      .catch(error => Promise.reject(error));
  }

  async getProfile(accessToken) {
    return this._super.callApiMethod('user/profile', accessToken).catch(error => Promise.reject(error));
  }
}

exports.Api = Api;
