import { OrderReferenceStates } from '../enums/states.enum';

export interface IOrderReferenceStatus {
  State: OrderReferenceStates;
  LastUpdateTimestamp: Date;
  ReasonCode: string;
  ReasonDescription: string;
}
