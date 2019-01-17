import { ReportType } from '../enums/report.type.enum';
import { Schedule } from '../enums/schedule.enum';

export interface IReportSchedule {
  ReportType: ReportType;
  Schedule: Schedule;
}
