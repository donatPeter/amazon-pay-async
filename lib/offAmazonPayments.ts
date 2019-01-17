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
import { IGetServiceStatusResponse } from '../types/get.service.status.type';
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

import { IConfiguration } from '../classes/config';
import { Amazon } from './amazon';

export class OffAmazonPayments {
  private version: string;
  private requestHandler: Amazon;
  constructor(config: IConfiguration, version = '2013-01-01') {
    this.version = version;
    this.requestHandler = new Amazon(config);
  }

  public async authorize(params: IAuthorizeRequest): Promise<IAuthorizeResponse> {
    return this.requestHandler.callMwsMethod('Authorize', this.version, params).catch((error) => Promise.reject(error));
  }

  public async cancelOrderReference(params: ICancelOrderReferenceRequest) {
    return this.requestHandler.callMwsMethod('CancelOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async capture(params: ICaptureRequest): Promise<ICaptureResponse> {
    return this.requestHandler.callMwsMethod('Capture', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeAuthorization(params: ICloseAuthorizationRequest) {
    return this.requestHandler.callMwsMethod('CloseAuthorization', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeOrderReference(params: ICloseOrderReferenceRequest) {
    return this.requestHandler.callMwsMethod('CloseOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async confirmOrderReference(params: IConfirmOrderReferenceRequest) {
    return this.requestHandler.callMwsMethod('ConfirmOrderReference', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getAuthorizationDetails(params: IGetAuthorizationDetailsRequest): Promise<IGetAuthorizationDetailsResponse> {
    return this.requestHandler.callMwsMethod('GetAuthorizationDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getCaptureDetails(params: IGetCaptureDetailsRequest): Promise<IGetCaptureDetailsResponse> {
    return this.requestHandler.callMwsMethod('GetCaptureDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getMerchantAccountStatus(params: IGetMerchantAccountStatusRequest): Promise<IGetMerchantAccountStatusResponse> {
    return this.requestHandler.callMwsMethod('GetMerchantAccountStatus', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getOrderReferenceDetails(params: IGetOrderReferenceDetailsRequest): Promise<IGetOrderReferenceDetailsResponse> {
    return this.requestHandler.callMwsMethod('GetOrderReferenceDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getRefundDetails(params: IGetRefundDetailsRequest): Promise<IGetRefundDetailsResponse> {
    return this.requestHandler.callMwsMethod('GetRefundDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getServiceStatus(): Promise<IGetServiceStatusResponse> {
    return this.requestHandler.callMwsMethod('GetServiceStatus', this.version).catch((error) => Promise.reject(error));
  }

  public async refund(params: IRefundRequest): Promise<IRefundResponse> {
    return this.requestHandler.callMwsMethod('Refund', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setOrderAttributes(params: ISetOrderAttributesRequest): Promise<ISetOrderAttributesResponse> {
    return this.requestHandler.callMwsMethod('SetOrderAttributes', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setOrderReferenceDetails(params: ISetOrderReferenceDetailsRequest): Promise<ISetOrderReferenceDetailsResponse> {
    return this.requestHandler.callMwsMethod('SetOrderReferenceDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  // Recurring payment-specific API
  public async authorizeOnBillingAgreement(params: IAuthorizeOnBillingAgreementRequest): Promise<IAuthorizeOnBillingAgreementResponse> {
    return this.requestHandler.callMwsMethod('AuthorizeOnBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async closeBillingAgreement(params: ICloseBillingAgreementRequest) {
    return this.requestHandler.callMwsMethod('CloseBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async confirmBillingAgreement(params: IConfirmBillingAgreementRequest) {
    return this.requestHandler.callMwsMethod('ConfirmBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }

  public async createOrderReferenceForId(params: ICreateOrderReferenceForIdRequest) {
    return this.requestHandler.callMwsMethod('CreateOrderReferenceForId', this.version, params).catch((error) => Promise.reject(error));
  }

  public async getBillingAgreementDetails(params: IGetBillingAgreementDetailsRequest): Promise<IGetBillingAgreementDetailsResponse> {
    return this.requestHandler.callMwsMethod('GetBillingAgreementDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async setBillingAgreementDetails(params: ISetBillingAgreementDetailsRequest): Promise<ISetBillingAgreementDetailsResponse> {
    return this.requestHandler.callMwsMethod('SetBillingAgreementDetails', this.version, params).catch((error) => Promise.reject(error));
  }

  public async validateBillingAgreement(params: IValidateBillingAgreementRequest): Promise<IValidateBillingAgreementResponse> {
    return this.requestHandler.callMwsMethod('ValidateBillingAgreement', this.version, params).catch((error) => Promise.reject(error));
  }
}
