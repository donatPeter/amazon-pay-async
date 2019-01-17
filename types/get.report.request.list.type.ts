import { IReportRequestInfo } from './entities/report.request.info.type';
import { ReportProcessingStatusList } from './enums/report.processing.status.list.enum';
import { ReportType } from './enums/report.type.enum';

export interface IGetReportRequestListRequest {
  ReportRequestIdList?: string[];
  ReportTypeList?: ReportType[];
  ReportProcessingStatusList?: ReportProcessingStatusList;
  MaxCount?: number;
  RequestedFromDate?: Date;
  RequestedToDate?: Date;
}

export interface IGetReportRequestListResponse {
  NextToken: string;
  HasNext: boolean;
  ReportRequestInfo: IReportRequestInfo;
}
