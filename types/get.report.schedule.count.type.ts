import { ReportType } from './enums/report.type.enum';

export interface IGetReportScheduleCountRequest {
  ReportTypeList?: ReportType[];
}

export interface IGetReportScheduleCountResponse {
  Count: number;
}
