import { IBuyer } from './buyer.type';
import { IConstraint } from './constraints.type';
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
  Constraints: { Constraint: IConstraint } | { Constraint: IConstraint[] };
  CreationTimestamp: Date;
  ExpirationTimestamp: Date;
  IdList: string[];
}
