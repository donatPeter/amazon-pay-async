import { Environment } from './environment';

/**
 * Config class to make a connection with an Amazon account
 * @class {Config}
 */
export class Config {
  public readonly environment: Environment;
  public readonly clientId: string;
  public readonly sellerId: string;
  public readonly mwsAccessKey: string;
  public readonly mwsSecretKey: string;
  constructor(cfg: IConfiguration) {
    this.environment = cfg.environment;
    this.clientId = cfg.clientId;
    this.sellerId = cfg.sellerId;
    this.mwsAccessKey = cfg.mwsAccessKey;
    this.mwsSecretKey = cfg.mwsSecretKey;
  }
}

export interface IConfiguration {
  environment: Environment;
  clientId: string;
  sellerId: string;
  mwsAccessKey: string;
  mwsSecretKey: string;
}
