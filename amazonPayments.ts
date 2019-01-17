import { EnvironmentEnum, IConfiguration } from './classes/config';
import { Auth } from './lib/auth';
import { OffAmazonPayments } from './lib/offAmazonPayments';
import { Reports } from './lib/reports';

export { IConfiguration, OffAmazonPayments };
export {
  IAddress,
  IAuthorizationDetails,
  IBillingAgreementAttributes,
  IBillingAgreementDetails,
  IBillingAgreementLimits,
  IBillingAgreementStatus,
  IBuyer,
  ICaptureDetails,
  IConstraints,
  IDestination,
  IOrderAttributes,
  IOrderReferenceAttributes,
  IOrderReferenceDetails,
  IOrderReferenceStatus,
  IOrderTotal,
  IPaymentServiceProviderAttributes,
  IPrice,
  IRefundDetails,
  IReportInfo,
  IReportRequestInfo,
  IReportSchedule,
  ISellerBillingAgreementAttributes,
  ISellerOrderAttributes,
  IStatus,
} from './types/entities';
export {
  AccountStatus,
  DestinationType,
  RefundType,
  ReportProcessingStatusList,
  ReportType,
  Schedule,
  ServiceStatus,
  AuthorizationStates,
  BillingAgreementStates,
  CaptureStates,
  OrderReferenceStates,
  RefurnStates,
  FailureReasonCode,
  ValidationResult,
} from './types/enums';
export {
  IAuthorizeOnBillingAgreementRequest, IAuthorizeOnBillingAgreementResponse,
  IAuthorizeRequest, IAuthorizeResponse,
  ICancelOrderReferenceRequest,
  ICancelReportRequestsRequest, ICancelReportRequestsResponse,
  ICaptureRequest, ICaptureResponse,
  ICloseAuthorizationRequest,
  ICloseBillingAgreementRequest,
  ICloseOrderReferenceRequest,
  IConfirmBillingAgreementRequest,
  IConfirmOrderReferenceRequest,
  ICreateOrderReferenceForIdRequest, ICreateOrderReferenceForIdResponse,
  IGetAuthorizationDetailsRequest, IGetAuthorizationDetailsResponse,
  IGetBillingAgreementDetailsRequest, IGetBillingAgreementDetailsResponse,
  IGetCaptureDetailsRequest, IGetCaptureDetailsResponse,
  IGetMerchantAccountStatusRequest, IGetMerchantAccountStatusResponse,
  IGetOrderReferenceDetailsRequest, IGetOrderReferenceDetailsResponse,
  IGetRefundDetailsRequest, IGetRefundDetailsResponse,
  IGetReportCountRequest,
  IGetReportListByNextTokenRequest, IGetReportListByNextTokenResponse,
  IGetReportListRequest, IGetReportListResponse,
  IGetReportRequestCountRequest, IGetReportRequestCountResponse,
  IGetReportRequestListByNextTokenRequest, IGetReportRequestListByNextTokenResponse,
  IGetReportRequestListRequest, IGetReportRequestListResponse,
  IGetReportScheduleCountRequest, IGetReportScheduleCountResponse,
  IGetReportScheduleListRequest, IGetReportScheduleListRespose,
  IGetReportRequest, IGetReportResponse,
  IGetServiceStatusResponse,
  IManageReportScheduleRequest, IManageReportScheduleResponse,
  IRefundRequest, IRefundResponse,
  IRequestReportRequest, IRequestReportResponse,
  ISetBillingAgreementDetailsRequest, ISetBillingAgreementDetailsResponse,
  ISetOrderAttributesRequest, ISetOrderAttributesResponse,
  ISetOrderReferenceDetailsRequest, ISetOrderReferenceDetailsResponse,
  ITokenInformationResponse,
  IUpdateReportAcknowledgementsRequest, IUpdateReportAcknowledgementsResposne,
  IValidateBillingAgreementRequest, IValidateBillingAgreementResponse,
} from './types';

export default class AmazonPayClient {
  public static readonly Environments = EnvironmentEnum;
  public readonly auth: Auth;
  public readonly offAmazonPayments: OffAmazonPayments;
  public readonly reports: Reports;

  constructor(opts: IConfiguration) {
    this.auth = new Auth(opts);
    this.reports = new Reports(opts);
    this.offAmazonPayments = new OffAmazonPayments(opts);
  }
}
