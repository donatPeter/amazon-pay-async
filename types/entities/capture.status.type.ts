import { CaptureStatusReasons } from '../enums/capture.status.reason.enum';
import { CaptureStates } from '../enums/states.enum';

export interface ICaptureStatus {
  State: CaptureStates;
  LastUpdatedTimestamp: string;
  ReasonCode: CaptureStatusReasons;
  ReasonDescription: string;
}
