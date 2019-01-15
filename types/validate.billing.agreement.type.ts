import { IBillingAgreementStatus } from './entities/billing.agreement.status.type';

export interface IValidateBillingAgreementRequest {
  AmazonBillingAgreementId: string;
}

export interface IValidateBillingAgreementResponse {
  ValidationResult: ValidationResult;
  FailureReasonCode?: FailureReasonCode;
  BillingAgreementStatus: IBillingAgreementStatus;
}

enum ValidationResult {
  Success = 'Success',
  Failure = 'Failure',
}

enum FailureReasonCode {
  InvalidPaymentMethod = 'InvalidPaymentMethod',
  ValidationTimedOut = 'ValidationTimedOut',
}
