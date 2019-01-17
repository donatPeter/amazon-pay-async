import { IReportRequestInfo } from './entities/report.request.info.type';
import { ReportProcessingStatusList } from './enums/report.processing.status.list.enum';
import { ReportType } from './enums/report.type.enum';

export interface ICancelReportRequestsRequest {
  ReportRequestIdList?: string[];
  ReportTypeList?: ReportType[];
  ReportProcessingStatusList?: ReportProcessingStatusList;
  RequestedFromDate?: Date;
  RequestedToDate?: Date;
}

export interface ICancelReportRequestsResponse {
  Count: number;
  ReportRequestInfo: IReportRequestInfo;
}
