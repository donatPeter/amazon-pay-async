import { IOrderTotal } from './order.total.type';
import { ISellerOrderAttributes } from './seller.order.attributes.type';

export interface IOrderReferenceAttributes {
  OrderTotal: IOrderTotal;
  PlatformId: string;
  SellerNote: string;
  SellerOrderAttributes: ISellerOrderAttributes;
}
