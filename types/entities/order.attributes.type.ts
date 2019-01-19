import { IOrderTotal } from './order.total.type';
import { IPaymentServiceProviderAttributes } from './payment.service.provider.attributes.type';
import { ISellerOrderAttributes } from './seller.order.attributes.type';

export interface IOrderAttributes {
  OrderTotal?: IOrderTotal;
  PlatformID?: string;
  SellerNote?: string;
  SellerOrderAttributes?: ISellerOrderAttributes;
  PaymentServiceProviderAttributes?: IPaymentServiceProviderAttributes;
}
