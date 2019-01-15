import { AccountStatus } from './entities/account.status.type';

export interface IGetMerchantAccountStatusRequest {
  SellerId: string;
}

export interface IGetMerchantAccountStatusResponse {
  AccountStatus: AccountStatus;
}
