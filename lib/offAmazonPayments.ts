import { Config } from '../classes/config';
import { IAuthorizeRequest, IAuthorizeResponse } from '../types/authorize.type';
import { ICancelOrderReferenceRequest } from '../types/cancel.order.reference.type';
import { ICaptureRequest, ICaptureResponse } from '../types/capture.type';
import { ICloseAuthorizationRequest } from '../types/close.authorization.type';
import { ICloseOrderReferenceRequest } from '../types/close.order.reference.type';
import { IConfirmOrderReferenceRequest } from '../types/confirm.order.reference.type';
import { IGetAuthorizationDetailsRequest, IGetAuthorizationDetailsResponse } from '../types/get.authorization.details.type';
import { IGetCaptureDetailsRequest, IGetCaptureDetailsResponse } from '../types/get.capture.details.type';
import { IGetMerchantAccountStatusRequest, IGetMerchantAccountStatusResponse } from '../types/get.merchant.account.status.type';
import { IGetOrderReferenceDetailsRequest, IGetOrderReferenceDetailsResponse } from '../types/get.order.reference.details.type';
import { IGetRefundDetailsRequest, IGetRefundDetailsResponse } from '../types/get.refund.details.type';
import { IGetServiceStatusResponse } from '../types/getServiceStatus.type';
import { IRefundRequest, IRefundResponse } from '../types/refund.type';
import { ISetOrderAttributesRequest, ISetOrderAttributesResponse } from '../types/set.order.attributes.type';
import { ISetOrderReferenceDetailsRequest, ISetOrderReferenceDetailsResponse } from '../types/set.order.reference.details.type';

import { IAuthorizeOnBillingAgreementRequest, IAuthorizeOnBillingAgreementResponse } from '../types/authorize.on.billing.agreement.type';
import { ICloseBillingAgreementRequest } from '../types/close.billing.agreement.type';
import { IConfirmBillingAgreementRequest } from '../types/confirm.billing.agreement.type';
import { ICreateOrderReferenceForIdRequest } from '../types/create.order.reference.for.id.type';
import { IGetBillingAgreementDetailsRequest, IGetBillingAgreementDetailsResponse } from '../types/get.billing.agreement.details.type';
import { ISetBillingAgreementDetailsRequest, ISetBillingAgreementDetailsResponse } from '../types/set.billing.agreement.details.type';
import { IValidateBillingAgreementRequest, IValidateBillingAgreementResponse } from '../types/validate.billing.agreement.type';

import { Amazon } from './amazon';

export class OffAmazonPayments extends Amazon {
  public config: Config;
  private version: string;
  constructor(config: Config, version = '2013-01-01') {
    super(config);
    this.version = version;
  }

  public async authorize(params: IAuthorizeRequest): Promise<IAuthorizeResponse> {
    return this.callMwsMethod('Authorize', this.version, params).catch((error) => Promise.reject(error));
  }

  public async cancelOrderReference(params: ICancelOrderReferenceRequest) {
    return this.callMwsMethod('CancelOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async capture(params: ICaptureRequest): Promise<ICaptureResponse> {
    return this.callMwsMethod('Capture', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeAuthorization(params: ICloseAuthorizationRequest) {
    return this.callMwsMethod('CloseAuthorization', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeOrderReference(params: ICloseOrderReferenceRequest) {
    return this.callMwsMethod('CloseOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async confirmOrderReference(params: IConfirmOrderReferenceRequest) {
    return this.callMwsMethod('ConfirmOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getAuthorizationDetails(params: IGetAuthorizationDetailsRequest): Promise<IGetAuthorizationDetailsResponse> {
    return this.callMwsMethod('GetAuthorizationDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getCaptureDetails(params: IGetCaptureDetailsRequest): Promise<IGetCaptureDetailsResponse> {
    return this.callMwsMethod('GetCaptureDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getMerchantAccountStatus(params: IGetMerchantAccountStatusRequest): Promise<IGetMerchantAccountStatusResponse> {
    return this.callMwsMethod('GetMerchantAccountStatus', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getOrderReferenceDetails(params: IGetOrderReferenceDetailsRequest): Promise<IGetOrderReferenceDetailsResponse> {
    return this.callMwsMethod('GetOrderReferenceDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getRefundDetails(params: IGetRefundDetailsRequest): Promise<IGetRefundDetailsResponse> {
    return this.callMwsMethod('GetRefundDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getServiceStatus(): Promise<IGetServiceStatusResponse> {
    return this.callMwsMethod('GetServiceStatus', this.version).catch((error) => Promise.reject(error));
  }

  public async refund(params: IRefundRequest): Promise<IRefundResponse> {
    return this.callMwsMethod('Refund', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setOrderAttributes(params: ISetOrderAttributesRequest): Promise<ISetOrderAttributesResponse> {
    return this.callMwsMethod('SetOrderAttributes', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setOrderReferenceDetails(params: ISetOrderReferenceDetailsRequest): Promise<ISetOrderReferenceDetailsResponse> {
    return this.callMwsMethod('SetOrderReferenceDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  // Recurring payment-specific API
  public async authorizeOnBillingAgreement(params: IAuthorizeOnBillingAgreementRequest): Promise<IAuthorizeOnBillingAgreementResponse> {
    return this.callMwsMethod('AuthorizeOnBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeBillingAgreement(params: ICloseBillingAgreementRequest) {
    return this.callMwsMethod('CloseBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async confirmBillingAgreement(params: IConfirmBillingAgreementRequest) {
    return this.callMwsMethod('ConfirmBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async createOrderReferenceForId(params: ICreateOrderReferenceForIdRequest) {
    return this.callMwsMethod('CreateOrderReferenceForId', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getBillingAgreementDetails(params: IGetBillingAgreementDetailsRequest): Promise<IGetBillingAgreementDetailsResponse> {
    return this.callMwsMethod('GetBillingAgreementDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setBillingAgreementDetails(params: ISetBillingAgreementDetailsRequest): Promise<ISetBillingAgreementDetailsResponse> {
    return this.callMwsMethod('SetBillingAgreementDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async validateBillingAgreement(params: IValidateBillingAgreementRequest): Promise<IValidateBillingAgreementResponse> {
    return this.callMwsMethod('ValidateBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }
}
