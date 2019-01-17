import { CaptureStates } from '../enums/states.enum';

export interface ICaptureStatus {
  State: CaptureStates;
  LastUpdatedTimestamp: string;
  ReasonCode: string;
  ReasonDescription: string;
}
