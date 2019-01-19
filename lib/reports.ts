import { IConfiguration } from '../classes/config';
import { Amazon } from './amazon';

import { ICancelReportRequestsRequest, ICancelReportRequestsResponse } from '../types/cancel.report.requests.type';
import { IGetReportCountRequest } from '../types/get.report.count.type';
import { IGetReportListByNextTokenRequest, IGetReportListByNextTokenResponse } from '../types/get.report.list.by.next.token.type';
import { IGetReportListRequest, IGetReportListResponse } from '../types/get.report.list.type';
import { IGetReportRequestCountRequest, IGetReportRequestCountResponse } from '../types/get.report.request.count.type';
import { IGetReportRequestListByNextTokenRequest, IGetReportRequestListByNextTokenResponse } from '../types/get.report.request.list.by.next.token.type';
import { IGetReportRequestListRequest, IGetReportRequestListResponse } from '../types/get.report.request.list.type';
import { IGetReportScheduleCountRequest, IGetReportScheduleCountResponse } from '../types/get.report.schedule.count.type';
import { IGetReportScheduleListRequest, IGetReportScheduleListRespose } from '../types/get.report.schedule.list.type';
import { IGetReportRequest, IGetReportResponse } from '../types/get.report.type';
import { IManageReportScheduleRequest, IManageReportScheduleResponse } from '../types/manage.report.schedule.type';
import { IRequestReportRequest, IRequestReportResponse } from '../types/request.report.type';
import { IUpdateReportAcknowledgementsRequest, IUpdateReportAcknowledgementsResposne } from '../types/update.report.acknowledgements.type';

export class Reports {
  private readonly requestHandler: Amazon;
  private readonly version: string;
  constructor(config: IConfiguration, version = '2009-01-01') {
    this.requestHandler = new Amazon(config);
    this.version = version;
  }

  public async requestReport(params: IRequestReportRequest): Promise<IRequestReportResponse> {
    return this.requestHandler.callMwsMethod('RequestReport', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestList(params: IGetReportRequestListRequest): Promise<IGetReportRequestListResponse> {
    return this.requestHandler.callMwsMethod('GetReportRequestList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestListByNextToken(params: IGetReportRequestListByNextTokenRequest): Promise<IGetReportRequestListByNextTokenResponse> {
    return this.requestHandler.callMwsMethod('GetReportRequestListByNextToken', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestCount(params: IGetReportRequestCountRequest): Promise<IGetReportRequestCountResponse> {
    return this.requestHandler.callMwsMethod('GetReportRequestCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async cancelReportRequests(params: ICancelReportRequestsRequest): Promise<ICancelReportRequestsResponse> {
    return this.requestHandler.callMwsMethod('CancelReportRequests', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportList(params: IGetReportListRequest): Promise<IGetReportListResponse> {
    return this.requestHandler.callMwsMethod('GetReportList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportListByNextToken(params: IGetReportListByNextTokenRequest): Promise<IGetReportListByNextTokenResponse> {
    return this.requestHandler.callMwsMethod('GetReportListByNextToken', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportCount(params: IGetReportCountRequest): Promise<number> {
    return this.requestHandler.callMwsMethod('GetReportCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReport(params: IGetReportRequest): Promise<IGetReportResponse> {
    return this.requestHandler.callMwsMethod('GetReport', this.version, params).catch((error) => Promise.reject(error));
  }

  public async manageReportSchedule(params: IManageReportScheduleRequest): Promise<IManageReportScheduleResponse> {
    return this.requestHandler.callMwsMethod('ManageReportSchedule', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportScheduleList(params: IGetReportScheduleListRequest): Promise<IGetReportScheduleListRespose> {
    return this.requestHandler.callMwsMethod('GetReportScheduleList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportScheduleCount(params: IGetReportScheduleCountRequest): Promise<IGetReportScheduleCountResponse> {
    return this.requestHandler.callMwsMethod('GetReportScheduleCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async updateReportAcknowledgements(params: IUpdateReportAcknowledgementsRequest): Promise<IUpdateReportAcknowledgementsResposne> {
    return this.requestHandler.callMwsMethod('UpdateReportAcknowledgements', this.version, params).catch((error) => Promise.reject(error));
  }
}
