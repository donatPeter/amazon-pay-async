import { EnvironmentEnum, EnvironmentList, IEnvironment } from './environment';
export { EnvironmentEnum };

export class Config {
  public readonly environment: IEnvironment;
  public readonly clientId: string;
  public readonly sellerId: string;
  public readonly mwsAccessKey: string;
  public readonly mwsSecretKey: string;
  constructor(cfg: IConfiguration) {
    this.environment = EnvironmentList[cfg.environment];
    this.clientId = cfg.clientId;
    this.sellerId = cfg.sellerId;
    this.mwsAccessKey = cfg.mwsAccessKey;
    this.mwsSecretKey = cfg.mwsSecretKey;
  }
}

export interface IConfiguration {
  environment: EnvironmentEnum[any];
  clientId: string;
  sellerId: string;
  mwsAccessKey: string;
  mwsSecretKey: string;
}
