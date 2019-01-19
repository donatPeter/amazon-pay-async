import { AuthorizationStatusReasons } from '../enums/authorization.status.reason.enum';
import { AuthorizationStates } from '../enums/states.enum';

export interface IAuthorizationStatus {
  State: AuthorizationStates;
  LastUpdateTimestamp: Date;
  ReasonCode: AuthorizationStatusReasons;
  ReasonDescription: string;
}
