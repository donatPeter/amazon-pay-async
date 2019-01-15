import { IOrderReferenceAttributes } from './entities/order.reference.attributes.type';
import { IOrderReferenceDetails } from './entities/order.reference.details.type';

export interface ISetOrderReferenceDetailsRequest {
  AmazonOrderReferenceId: string;
  OrderReferenceAttributes: IOrderReferenceAttributes;
}

export interface ISetOrderReferenceDetailsResponse {
  OrderReferenceDetails: IOrderReferenceDetails;
}
