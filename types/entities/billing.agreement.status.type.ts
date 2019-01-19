import { BillingAgreementStatusReasons } from '../enums/billing.agreement.status.reason.enum';
import { BillingAgreementStates } from '../enums/states.enum';

export interface IBillingAgreementStatus {
  State: BillingAgreementStates;
  LastUpdatedTimestamp: string;
  ReasonCode: BillingAgreementStatusReasons;
  ReasonDescription: string;
}
