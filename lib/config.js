/**
 * Config class to make a connection with an Amazon account
 * @class {Config}
 */
class Config {
  constructor(cfg) {
    this.environment = cfg.environment;
    this.clientId = cfg.clientId;
    this.sellerId = cfg.sellerId;
    this.mwsAccessKey = cfg.mwsAccessKey;
    this.mwsSecretKey = cfg.mwsSecretKey;
  }
}

exports.Config = Config;
