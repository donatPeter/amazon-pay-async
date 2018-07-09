class Environment {
  constructor(mwsEndpoint, apiEndpoint) {
    this.mwsEndpoint = mwsEndpoint;
    this.apiEndpoint = apiEndpoint;
  }
}

/**
 * Amazon Payments Environments
 * @type {Environment}
 */
const Sandbox = new Environment('https://mws.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01', 'https://api.sandbox.amazon.com');
const Production = new Environment('https://mws.amazonservices.com/OffAmazonPayments/2013-01-01', 'https://api.amazon.com');
const SandboxEU = new Environment('https://mws-eu.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01/', 'https://api.sandbox.amazon.com');
const ProductionEU = new Environment('https://mws-eu.amazonservices.com/OffAmazonPayments/2013-01-01', 'https://api.amazon.com');

/**
 * Amazon Reports Environments
 * @type {Environment}
 */
Sandbox.Reports = new Environment('https://mws.amazonservices.com/', 'https://api.sandbox.amazon.com');
Production.Reports = new Environment('https://mws.amazonservices.com/', 'https://api.amazon.com');
SandboxEU.Reports = new Environment('https://mws-eu.amazonservices.com/', 'https://api.sandbox.amazon.com');
ProductionEU.Reports = new Environment('https://mws-eu.amazonservices.com/', 'https://api.amazon.com');

module.exports = {
  Sandbox,
  SandboxEU,
  Production,
  ProductionEU,
};
