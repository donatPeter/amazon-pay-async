import { IAuthorizationDetails } from './entities/authorization.details.type';
import { IPrice } from './entities/price.type';
import { ISellerOrderAttributes } from './entities/seller.order.attributes.type';

export interface IAuthorizeOnBillingAgreementRequest {
  AmazonBillingAgreementId: string;
  AuthorizationReferenceId: string;
  AuthorizationAmount: IPrice;
  SellerAuthorizationNote?: string;
  TransactionTimeout?: number;
  CaptureNow?: boolean;
  SoftDescriptor?: string;
  SellerNote?: string;
  PlatformId?: string;
  SellerOrderAttributes?: ISellerOrderAttributes;
  InheritShippingAddress?: boolean;
}

export interface IAuthorizeOnBillingAgreementResponse {
  AuthorizationDetails: IAuthorizationDetails;
  AmazonOrderReferenceId: string;
}
