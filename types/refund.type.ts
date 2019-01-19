import { IPrice } from './entities/price.type';
import { IRefundDetails } from './entities/refund.details.type';

export interface IRefundRequest {
  AmazonCaptureId: string;
  RefundReferenceId: string;
  RefundAmount: IPrice;
  SellerRefundNote?: string;
  SoftDescriptor?: string;
}

export interface IRefundResponse {
  RefundDetails: IRefundDetails;
}
