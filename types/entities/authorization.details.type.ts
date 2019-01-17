import { IAuthorizationStatus } from './authorization.status.type';
import { IPrice } from './price.type';

export interface IAuthorizationDetails {
  AmazonAuthorizationId: string;
  AuthorizationReferenceId: string;
  SellerAuthorizationNote: string;
  AuthorizationAmount: IPrice;
  CapturedAmount: IPrice;
  AuthorizationFee: IPrice;
  IdList: string[];
  CreationTimestamp: Date;
  ExpirationTimestamp: Date;
  AuthorizationStatus: IAuthorizationStatus;
  SoftDecline: boolean;
  CaptureNow: boolean;
  SoftDescriptor: string;
}
