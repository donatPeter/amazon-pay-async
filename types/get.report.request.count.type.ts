import { ReportProcessingStatusList } from './enums/report.processing.status.list.enum';
import { ReportType } from './enums/report.type.enum';

export interface IGetReportRequestCountRequest {
  ReportTypeList?: ReportType;
  ReportProcessingStatusList?: ReportProcessingStatusList;
  RequestedFromDate?: Date;
  RequestedToDate?: Date;
}

export interface IGetReportRequestCountResponse {
  Count: number;
}
