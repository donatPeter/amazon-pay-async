class Reports {
  constructor(_super, version = '2009-01-01') {
    this._super = _super;
    this.version = version;
  }

  async requestReport(params) {
    return this._super.callMwsMethod('RequestReport', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportRequestList(params) {
    return this._super.callMwsMethod('GetReportRequestList', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportRequestListByNextToken(params) {
    return this._super.callMwsMethod('GetReportRequestListByNextToken', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportRequestCount(params) {
    return this._super.callMwsMethod('GetReportRequestCount', this.version, params).catch(error => Promise.reject(error));
  }

  async cancelReportRequests(params) {
    return this._super.callMwsMethod('CancelReportRequests', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportList(params) {
    return this._super.callMwsMethod('GetReportList', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportListByNextToken(params) {
    return this._super.callMwsMethod('GetReportListByNextToken', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportCount(params) {
    return this._super.callMwsMethod('GetReportCount', this.version, params).catch(error => Promise.reject(error));
  }

  async getReport(params) {
    return this._super.callMwsMethod('GetReport', this.version, params).catch(error => Promise.reject(error));
  }

  async manageReportSchedule(params) {
    return this._super.callMwsMethod('ManageReportSchedule', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportScheduleList(params) {
    return this._super.callMwsMethod('GetReportScheduleList', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportScheduleListByNextToken(params) {
    return this._super.callMwsMethod('GetReportScheduleListByNextToken', this.version, params).catch(error => Promise.reject(error));
  }

  async getReportScheduleCount(params) {
    return this._super.callMwsMethod('GetReportScheduleCount', this.version, params).catch(error => Promise.reject(error));
  }

  async updateReportAcknowledgements(params) {
    return this._super.callMwsMethod('UpdateReportAcknowledgements', this.version, params).catch(error => Promise.reject(error));
  }
}

exports.Reports = Reports;
