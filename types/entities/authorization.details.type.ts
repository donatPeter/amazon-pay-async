import { IPrice } from './price.type';
import { IStatus } from './status.type';

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
  AuthorizationStatus: IStatus;
  SoftDecline: boolean;
  CaptureNow: boolean;
  SoftDescriptor: string;
}
