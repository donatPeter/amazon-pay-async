import { IRefundDetails } from './entities/refund.details.type';

export interface IGetRefundDetailsRequest {
  AmazonRefundId: string;
}

export interface IGetRefundDetailsResponse {
  RefundDetails: IRefundDetails;
}
