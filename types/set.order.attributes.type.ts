import { IOrderAttributes } from './entities/order.attributes.type';
import { IOrderReferenceDetails } from './entities/order.reference.details.type';

export interface ISetOrderAttributesRequest {
  AmazonOrderReferenceId: string;
  OrderAttributes?: IOrderAttributes;
}

export interface ISetOrderAttributesResponse {
  OrderReferenceDetails: IOrderReferenceDetails;
}
