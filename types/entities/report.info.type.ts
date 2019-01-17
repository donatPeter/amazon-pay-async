import { ReportType } from '../enums/report.type.enum';

export interface IReportInfo {
  ReportId: string;
  ReportType: ReportType;
  ReportRequestId: string;
  AvailableDate: Date;
  Acknowledged: boolean;
  AcknowledgedDate: Date;
}
