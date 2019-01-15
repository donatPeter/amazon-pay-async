import { ICaptureDetails } from './entities/capture.details.type';

export interface IGetCaptureDetailsRequest {
  AmazonCaptureId: string;
}

export interface IGetCaptureDetailsResponse {
  CaptureDetails: ICaptureDetails;
}
