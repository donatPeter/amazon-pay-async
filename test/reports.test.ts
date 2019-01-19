import 'jest';
import AmazonPayClient from '../amazonPayments';
import { ReportType } from '../types/enums/report.type.enum';
import { Schedule } from '../types/enums/schedule.enum';

const amazonReports = new AmazonPayClient({
  clientId: process.env.AMAZON_CLIENT_ID || '',
  environment: AmazonPayClient.Environments.Sandbox || '',
  mwsAccessKey: process.env.AMAZON_MWS_ACCESS_KEY || '',
  mwsSecretKey: process.env.AMAZON_MWS_SECRET_KEY || '',
  sellerId: process.env.AMAZON_SELLER_ID || '',
}).reports;

xdescribe('==reports testt==', () => {
  let reportRequestId: string;
  describe('requestReport', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.requestReport({ ReportType: ReportType._GET_MERCHANT_LISTINGS_DATA_ });
      expect(result).toBeDefined();
      expect(result.ReportRequestInfo.ReportProcessingStatus).toBe('_SUBMITTED_');
      reportRequestId = result.ReportRequestInfo.ReportRequestId;
      done();
    });
  });

  let reportRequestListNextToken;
  describe('getReportRequestList', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportRequestList({});
      expect(result).toBeDefined();
      expect(result.ReportRequestInfo).toBeGreaterThan(0);
      expect(result.HasNext).toBeTruthy();
      expect(result.NextToken).toBeTruthy();
      reportRequestListNextToken = result.NextToken;
      done();
    });
  });

  describe('getReportRequestListByNextToken', () => {
    it('should not return null', async (done) => {
      if (reportRequestListNextToken !== undefined) {
        const result = await amazonReports.getReportRequestListByNextToken({
          NextToken: reportRequestListNextToken,
        });
        expect(result).toBeDefined();
        expect(result.ReportRequestInfo).toBeTruthy();
        done();
      } else {
        throw new Error('test fails');
      }
    });
  });

  describe('getReportRequestCount', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportRequestCount({});
      expect(result).toBeDefined();
      expect(result.Count).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  describe('cancelReportRequests', () => {
    it('should not return null', async (done) => {
      this.timeout(5000);
      const result = await amazonReports.cancelReportRequests({ ReportRequestIdList: [reportRequestId] });
      expect(result).toBeDefined();
      expect(result.ReportRequestInfo).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  let reportListNextToken: string;
  let reportId: string;
  describe('getReportList', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportList({});
      expect(result).toBeDefined();
      expect(result.ReportInfo).toBeGreaterThanOrEqual(0);
      expect(result.HasNext).toBe(true);
      reportListNextToken = result.NextToken;
      reportId = result.ReportInfo[0].ReportId;
      done();
    });
  });

  describe('getReportListByNextToken', () => {
    it('should not return null', async (done) => {
      if (reportListNextToken !== undefined) {
        const result = await amazonReports.getReportListByNextToken({
          NextToken: reportListNextToken,
        });
        expect(result).toBeDefined();
        expect(result.ReportInfo).toBeGreaterThanOrEqual(0);
        done();
      } else {
        throw Error('No NextToken available');
        done();
      }
    });
  });

  describe('getReportCount', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportCount({});
      expect(result).toBeDefined();
      expect(result).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  describe('getReport', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReport({ ReportId: reportId });
      expect(result).toBeDefined();
      done();
    });
  });

  describe('manageReportSchedule', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.manageReportSchedule({
        ReportType: ReportType._GET_SELLER_FEEDBACK_DATA_,
        Schedule: Schedule._NEVER_,
      });
      expect(result).toBeDefined();
      done();
    });
  });

  let reportScheduleListNextToken;
  describe('getReportScheduleList', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportScheduleList({});
      expect(result).toBeDefined();
      expect(result.ReportSchedule).toBeDefined();
      reportScheduleListNextToken = result.NextToken;
      done();
    });
  });

  describe('getReportScheduleCount', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.getReportScheduleCount({});
      expect(result).toBeDefined();
      done();
    });
  });

  describe('updateReportAcknowledgements', () => {
    it('should not return null', async (done) => {
      const result = await amazonReports.updateReportAcknowledgements({
        Acknowledged: false,
        ReportIdList: [reportId],
      });
      expect(result).toBeDefined();
      done();
    });
  });
});
