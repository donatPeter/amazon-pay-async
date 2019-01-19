import { IReportInfo } from './entities/report.info.type';

export interface IGetReportListByNextTokenRequest {
  NextToken: string;
}

export interface IGetReportListByNextTokenResponse {
  NextToken: string;
  HasNext: boolean;
  ReportInfo: IReportInfo;
}
