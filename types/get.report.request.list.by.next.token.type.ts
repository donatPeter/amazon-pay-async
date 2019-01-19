import { IReportRequestInfo } from './entities/report.request.info.type';

export interface IGetReportRequestListByNextTokenRequest {
  NextToken: string;
}

export interface IGetReportRequestListByNextTokenResponse {
  NextToken: string;
  HasNext: boolean;
  ReportRequestInfo: IReportRequestInfo;
}
