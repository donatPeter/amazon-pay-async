import { IReportSchedule } from './entities/report.schedule.type';
import { ReportType } from './enums/report.type.enum';

export interface IGetReportScheduleListRequest {
  ReportTypeList?: ReportType[];
}

export interface IGetReportScheduleListRespose {
  NextToken: string;
  HasNext: boolean;
  ReportSchedule: IReportSchedule;
}
