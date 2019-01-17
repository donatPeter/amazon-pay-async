import { IReportInfo } from './entities/report.info.type';

export interface IUpdateReportAcknowledgementsRequest {
  ReportIdList: string[];
  Acknowledged?: boolean;
}

export interface IUpdateReportAcknowledgementsResposne {
  Count: number;
  ReportInfo: IReportInfo;
}
