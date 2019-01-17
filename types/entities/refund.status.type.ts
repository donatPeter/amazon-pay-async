import { RefurnStates } from '../enums/states.enum';

export interface IRefundStatus {
  State: RefurnStates;
  LastUpdateTimestamp: Date;
  ReasonCode: string;
  ReasonDescription: string;
}
