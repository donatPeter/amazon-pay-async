import { IReportSchedule } from './entities/report.schedule.type';
import { ReportType } from './enums/report.type.enum';
import { Schedule } from './enums/schedule.enum';

export interface IManageReportScheduleRequest {
  ReportType: ReportType;
  Schedule: Schedule;
  ScheduleDate?: Date;
}

export interface IManageReportScheduleResponse {
  Count: number;
  ReportSchedule: IReportSchedule;
}
