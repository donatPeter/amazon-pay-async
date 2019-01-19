import { IBillingAgreementStatus } from './entities/billing.agreement.status.type';
import { FailureReasonCode, ValidationResult } from './enums/validate.billing.results.enum';

export interface IValidateBillingAgreementRequest {
  AmazonBillingAgreementId: string;
}

export interface IValidateBillingAgreementResponse {
  ValidationResult: ValidationResult;
  FailureReasonCode?: FailureReasonCode;
  BillingAgreementStatus: IBillingAgreementStatus;
}
