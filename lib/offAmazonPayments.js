class OffAmazonPayments {
  constructor(_super, version = '2013-01-01') {
    this.version = version;
    this._super = _super;
  }

  async authorize(params) {
    return this._super.callMwsMethod('Authorize', this.version, params).catch(error => Promise.reject(error));
  }

  async cancelOrderReference(params) {
    return this._super.callMwsMethod('CancelOrderReference', this.version, params).catch(error => Promise.reject(error));
  }

  async capture(params) {
    return this._super.callMwsMethod('Capture', this.version, params).catch(error => Promise.reject(error));
  }

  async closeAuthorization(params) {
    return this._super.callMwsMethod('CloseAuthorization', this.version, params).catch(error => Promise.reject(error));
  }

  async closeOrderReference(params) {
    return this._super.callMwsMethod('CloseOrderReference', this.version, params).catch(error => Promise.reject(error));
  }

  async confirmOrderReference(params) {
    return this._super.callMwsMethod('ConfirmOrderReference', this.version, params).catch(error => Promise.reject(error));
  }

  async getAuthorizationDetails(params) {
    return this._super.callMwsMethod('GetAuthorizationDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async getCaptureDetails(params) {
    return this._super.callMwsMethod('GetCaptureDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async getMerchantAccountStatus(params) {
    return this._super.callMwsMethod('GetMerchantAccountStatus', this.version, params).catch(error => Promise.reject(error));
  }

  async getOrderReferenceDetails(params) {
    return this._super.callMwsMethod('GetOrderReferenceDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async getRefundDetails(params) {
    return this._super.callMwsMethod('GetRefundDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async getServiceStatus(params) {
    return this._super.callMwsMethod('GetServiceStatus', this.version, params).catch(error => Promise.reject(error));
  }

  async getServiceStatusAsync(params) {
    return this._super.callMwsMethod('GetServiceStatus', this.version, params).catch(error => Promise.reject(error));
  }

  async refund(params) {
    return this._super.callMwsMethod('Refund', this.version, params).catch(error => Promise.reject(error));
  }

  async setOrderAttributes(params) {
    return this._super.callMwsMethod('SetOrderAttributes', this.version, params).catch(error => Promise.reject(error));
  }

  async setOrderReferenceDetails(params) {
    return this._super.callMwsMethod('SetOrderReferenceDetails', this.version, params).catch(error => Promise.reject(error));
  }

  // Recurring payment-specific API
  async authorizeOnBillingAgreement(params) {
    return this._super.callMwsMethod('AuthorizeOnBillingAgreement', this.version, params).catch(error => Promise.reject(error));
  }

  async closeBillingAgreement(params) {
    return this._super.callMwsMethod('CloseBillingAgreement', this.version, params).catch(error => Promise.reject(error));
  }

  async confirmBillingAgreement(params) {
    return this._super.callMwsMethod('ConfirmBillingAgreement', this.version, params).catch(error => Promise.reject(error));
  }

  async createOrderReferenceForId(params) {
    return this._super.callMwsMethod('CreateOrderReferenceForId', this.version, params).catch(error => Promise.reject(error));
  }

  async getBillingAgreementDetails(params) {
    return this._super.callMwsMethod('GetBillingAgreementDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async setBillingAgreementDetails(params) {
    return this._super.callMwsMethod('SetBillingAgreementDetails', this.version, params).catch(error => Promise.reject(error));
  }

  async validateBillingAgreement(params) {
    return this._super.callMwsMethod('ValidateBillingAgreement', this.version, params).catch(error => Promise.reject(error));
  }
}

exports.OffAmazonPayments = OffAmazonPayments;
