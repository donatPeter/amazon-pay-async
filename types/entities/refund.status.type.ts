import { RefundStatusReasons } from '../enums/refund.status.reason.enum';
import { RefurnStates } from '../enums/states.enum';

export interface IRefundStatus {
  State: RefurnStates;
  LastUpdateTimestamp: Date;
  ReasonCode: RefundStatusReasons;
  ReasonDescription: string;
}
