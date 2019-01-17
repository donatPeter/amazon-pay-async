import { IReportInfo } from './entities/report.info.type';
import { ReportType } from './enums/report.type.enum';

export interface IGetReportListRequest {
  MaxCount?: number;
  ReportTypeList?: ReportType[];
  Acknowledged?: boolean;
  ReportRequestIdList?: string[];
  AvailableFromDate?: Date;
  AvailableToDate?: Date;
}

export interface IGetReportListResponse {
  NextToken: string;
  HasNext: boolean;
  ReportInfo: IReportInfo;
}
