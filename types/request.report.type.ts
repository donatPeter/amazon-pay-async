import { IReportRequestInfo } from './entities/report.request.info.type';
import { ReportType } from './enums/report.type.enum';

export interface IRequestReportRequest {
  ReportType: ReportType;
  StartDate?: Date;
  EndDate?: Date;
  ReportOptions?: string;
  MarketplaceIdList?: string[];
}

export interface IRequestReportResponse {
  ReportRequestInfo: IReportRequestInfo;
}
