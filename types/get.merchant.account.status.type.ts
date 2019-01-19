import { AccountStatus } from './enums/account.status.enum';

export interface IGetMerchantAccountStatusRequest {
  SellerId: string;
}

export interface IGetMerchantAccountStatusResponse {
  AccountStatus: AccountStatus;
}
