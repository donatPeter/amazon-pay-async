import { ICaptureStatus } from './capture.status.type';
import { IPrice } from './price.type';

export interface ICaptureDetails {
  AmazonCaptureId: string;
  CaptureReferenceId: string;
  SellerCaptureNote: string;
  CaptureAmount: IPrice;
  RefundedAmount: IPrice;
  CaptureFee: IPrice;
  IdList: string[];
  CreationTimestamp: Date;
  CaptureStatus: ICaptureStatus;
  SoftDescriptor: string;
}
