import { IBillingAgreementLimits } from './billing.agreement.limits.type';
import { IBillingAgreementStatus } from './billing.agreement.status.type';
import { IBuyer } from './buyer.type';
import { IConstraints } from './constraints.type';
import { IDestination } from './destination.type';
import { ISellerBillingAgreementAttributes } from './seller.billing.agreement.attributes.type';

export interface IBillingAgreementDetails {
  AmazonBillingAgreementId: string;
  BillingAgreementLimits: IBillingAgreementLimits;
  Buyer: IBuyer;
  SellerNote: string;
  PlatformId: string;
  Destination: IDestination;
  ReleaseEnvironment: string;
  SellerBillingAgreementAttributes: ISellerBillingAgreementAttributes;
  BillingAgreementStatus: IBillingAgreementStatus;
  Constraints: IConstraints[] | IConstraints;
  CreationTimestamp: Date;
  BillingAgreementConsent: boolean;
}
