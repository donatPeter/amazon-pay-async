const apiProd = 'https://api.amazon.com';
const apiSandbox = 'https://api.sandbox.amazon.com';
const reportMwsEndpoint = 'https://mws.amazonservices.com/';
const reportMwsEndpointEU = 'https://mws-eu.amazonservices.com/';
const mwsEndpointSandbox = 'https://mws.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01';
const mwsEndpointProd = 'https://mws.amazonservices.com/OffAmazonPayments/2013-01-01';
const mwsEndpointSandboxEU = 'https://mws-eu.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01/';
const mwsEndpointProdEU = 'https://mws-eu.amazonservices.com/OffAmazonPayments/2013-01-01';

export interface IEnvironment {
  mwsEndpoint: string;
  apiEndpoint: string;
  reports: string;
}

export class Environment implements IEnvironment {
  public mwsEndpoint: string;
  public apiEndpoint: string;
  public reports: string;
  constructor(mwsEndpoint: string, apiEndpoint: string, reports: string) {
    this.mwsEndpoint = mwsEndpoint;
    this.apiEndpoint = apiEndpoint;
    this.reports = reports;
  }
}

/**
 * Amazon Payments Environments
 * @type {Environment}
 */
export const Sandbox = new Environment(mwsEndpointSandbox, apiSandbox, reportMwsEndpoint);
export const Production = new Environment(mwsEndpointProd, apiProd, reportMwsEndpoint);
export const SandboxEU = new Environment(mwsEndpointSandboxEU, apiSandbox, reportMwsEndpointEU);
export const ProductionEU = new Environment(mwsEndpointProdEU, apiProd, reportMwsEndpointEU);
