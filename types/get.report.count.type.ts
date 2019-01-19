import { ReportType } from './enums/report.type.enum';

export interface IGetReportCountRequest {
  ReportTypeList?: ReportType[];
  Acknowledged?: boolean;
  AvailableFromDate?: Date;
  AvailableToDate?: Date;
}
