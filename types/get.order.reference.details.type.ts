import { IOrderReferenceDetails } from './entities/order.reference.details.type';

export interface IGetOrderReferenceDetailsRequest {
  AmazonOrderReferenceId: string;
  AccessToken?: string;
}

export interface IGetOrderReferenceDetailsResponse {
  OrderReferenceDetails: IOrderReferenceDetails;
}
