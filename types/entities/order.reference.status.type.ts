import { OrderReferenceStatusReasons } from '../enums/order.reference.status.reason.enum';
import { OrderReferenceStates } from '../enums/states.enum';

export interface IOrderReferenceStatus {
  State: OrderReferenceStates;
  LastUpdateTimestamp: Date;
  ReasonCode: OrderReferenceStatusReasons;
  ReasonDescription: string;
}
