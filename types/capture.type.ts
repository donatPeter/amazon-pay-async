import { ICaptureDetails } from './entities/capture.details.type';
import { IPrice } from './entities/price.type';

export interface ICaptureRequest {
  AmazonAuthorizationId: string;
  CaptureReferenceId: string;
  CaptureAmount: IPrice;
  SellerCaptureNote?: string;
  SoftDescriptor?: string;
}

export interface ICaptureResponse {
  CaptureDetails: ICaptureDetails;
}
