import { IOrderReferenceAttributes } from './entities/order.reference.attributes.type';
import { IOrderReferenceDetails } from './entities/order.reference.details.type';

export interface ICreateOrderReferenceForIdRequest {
  Id: string;
  IdType: string;
  InheritShippingAddress?: boolean;
  ConfirmNow?: boolean;
  OrderReferenceAttributes?: IOrderReferenceAttributes;
}

export interface ICreateOrderReferenceForIdResponse {
  OrderReferenceDetails: IOrderReferenceDetails;
}
