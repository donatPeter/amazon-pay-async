import { IBillingAgreementDetails } from './entities/billing.agreement.details.type';

export interface IGetBillingAgreementDetailsRequest {
  AmazonBillingAgreementId: string;
  AccessToken?: string;
}

export interface IGetBillingAgreementDetailsResponse {
  BillingAgreementDetails: IBillingAgreementDetails;
}
