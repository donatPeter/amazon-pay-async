import { Config } from '../classes/config';
import { Amazon } from './amazon';

export class Reports extends Amazon {
  public config: Config;
  private version: string;
  constructor(config: Config, version = '2009-01-01') {
    super(config);
    this.version = version;
  }

  public async requestReport(params) {
    return this.callMwsMethod('RequestReport', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestList(params) {
    return this.callMwsMethod('GetReportRequestList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestListByNextToken(params) {
    return this.callMwsMethod('GetReportRequestListByNextToken', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportRequestCount(params) {
    return this.callMwsMethod('GetReportRequestCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async cancelReportRequests(params) {
    return this.callMwsMethod('CancelReportRequests', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportList(params) {
    return this.callMwsMethod('GetReportList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportListByNextToken(params) {
    return this.callMwsMethod('GetReportListByNextToken', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportCount(params) {
    return this.callMwsMethod('GetReportCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReport(params) {
    return this.callMwsMethod('GetReport', this.version, params).catch((error) => Promise.reject(error));
  }

  public async manageReportSchedule(params) {
    return this.callMwsMethod('ManageReportSchedule', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportScheduleList(params) {
    return this.callMwsMethod('GetReportScheduleList', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportScheduleListByNextToken(params) {
    return this.callMwsMethod('GetReportScheduleListByNextToken', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getReportScheduleCount(params) {
    return this.callMwsMethod('GetReportScheduleCount', this.version, params).catch((error) => Promise.reject(error));
  }

  public async updateReportAcknowledgements(params) {
    return this.callMwsMethod('UpdateReportAcknowledgements', this.version, params).catch((error) => Promise.reject(error));
  }
}
