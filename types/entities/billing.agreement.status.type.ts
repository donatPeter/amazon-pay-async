import { BillingAgreementStates } from '../enums/states.enum';

export interface IBillingAgreementStatus {
  State: BillingAgreementStates;
  LastUpdatedTimestamp: string;
  ReasonCode: string;
  ReasonDescription: string;
}
