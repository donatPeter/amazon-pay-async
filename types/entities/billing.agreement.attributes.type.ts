import { ISellerBillingAgreementAttributes } from './seller.billing.agreement.attributes.type';

export interface IBillingAgreementAttributes {
  PlatformId: string;
  SellerNote: string;
  SellerBillingAgreementAttributes: ISellerBillingAgreementAttributes;
}
