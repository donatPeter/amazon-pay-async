import { AuthorizationStates } from '../enums/states.enum';

export interface IAuthorizationStatus {
  State: AuthorizationStates;
  LastUpdateTimestamp: Date;
  ReasonCode: string;
  ReasonDescription: string;
}
