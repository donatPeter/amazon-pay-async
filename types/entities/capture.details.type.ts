import { IPrice } from './price.type';
import { IStatus } from './status.type';

export interface ICaptureDetails {
  AmazonCaptureId: string;
  CaptureReferenceId: string;
  SellerCaptureNote: string;
  CaptureAmount: IPrice;
  RefundedAmount: IPrice;
  CaptureFee: IPrice;
  IdList: string[];
  CreationTimestamp: Date;
  CaptureStatus: IStatus;
  SoftDescriptor: string;
}
