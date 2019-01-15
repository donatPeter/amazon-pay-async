import { IAuthorizationDetails } from './entities/authorization.details.type';
import { IPrice } from './entities/price.type';

export interface IAuthorizeRequest {
  AmazonOrderReferenceId: string;
  AuthorizationReferenceId: string;
  AuthorizationAmount: IPrice;
  SellerAuthorizationNote?: string;
  TransactionTimeout?: number;
  CaptureNow?: boolean;
  SoftDescriptor?: string;
}

export interface IAuthorizeResponse {
  AuthorizationDetails: IAuthorizationDetails;
}
