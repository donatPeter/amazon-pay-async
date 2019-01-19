import { ReportType } from '../enums/report.type.enum';

export interface IReportRequestInfo {
  ReportRequestId: string;
  ReportType: ReportType;
  StartDate: Date;
  EndDate: Date;
  Scheduled: Date;
  SubmittedDate: Date;
  ReportProcessingStatus: string;
  GeneratedReportId: string;
  StartedProcessingDate: Date;
  CompletedDate: Date;
}
