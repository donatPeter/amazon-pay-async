import { IPrice } from './price.type';

export interface IBillingAgreementLimits {
  AmountLimitPerTimePeriod: IPrice;
  TimePeriodStartDate: Date;
  TimePeriodEndDate: Date;
  CurrentRemainingBalance: IPrice;
}
