import { IBillingAgreementAttributes } from './entities/billing.agreement.attributes.type';
import { IBillingAgreementDetails } from './entities/billing.agreement.details.type';

export interface ISetBillingAgreementDetailsRequest {
  AmazonBillingAgreementId: string;
  BillingAgreementAttributes: IBillingAgreementAttributes;
}

export interface ISetBillingAgreementDetailsResponse {
  BillingAgreementDetails: IBillingAgreementDetails;
}
