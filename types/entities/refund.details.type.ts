import { RefundType } from '../enums/refund.type.enum';
import { IPrice } from './price.type';
import { IRefundStatus } from './refund.status.type';

export interface IRefundDetails {
  AmazonRefundId: string;
  RefundReferenceId: string;
  SellerRefundNote: string;
  RefundType: RefundType;
  RefundAmount: IPrice;
  FeeRefunded: IPrice;
  CreationTimestamp: Date;
  RefundStatus: IRefundStatus;
  SoftDescriptor: string;
}
