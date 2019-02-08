import { IBuyer } from './buyer.type';
import { IConstraints } from './constraints.type';
import { IDestination } from './destination.type';
import { IOrderReferenceStatus } from './order.reference.status.type';
import { IOrderTotal } from './order.total.type';
import { ISellerOrderAttributes } from './seller.order.attributes.type';

export interface IOrderReferenceDetails {
  AmazonOrderReferenceId: string;
  Buyer: IBuyer;
  OrderTotal: IOrderTotal;
  SellerNote: string;
  PlatformId: string;
  Destination: IDestination;
  ReleaseEnvironment: string;
  SellerOrderAttributes: ISellerOrderAttributes;
  OrderReferenceStatus: IOrderReferenceStatus;
  Constraints: IConstraints[] | IConstraints;
  CreationTimestamp: Date;
  ExpirationTimestamp: Date;
  IdList: string[];
}
