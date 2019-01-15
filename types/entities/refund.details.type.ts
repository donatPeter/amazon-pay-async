import { IPrice } from './price.type';
import { IStatus } from './status.type';

export interface IRefundDetails {
  AmazonRefundId: string;
  RefundReferenceId: string;
  SellerRefundNote: string;
  RefundType: RefundType;
  RefundAmount: IPrice;
  FeeRefunded: IPrice;
  CreationTimestamp: Date;
  RefundStatus: IStatus;
  SoftDescriptor: string;
}

enum RefundType {
  SellerInitiated = 'SellerInitiated',
}
