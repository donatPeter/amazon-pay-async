import { IAuthorizationDetails } from './entities/authorization.details.type';

export interface IGetAuthorizationDetailsRequest {
  AmazonAuthorizationId: string;
}

export interface IGetAuthorizationDetailsResponse {
  AuthorizationDetails: IAuthorizationDetails;
}
