## Installation:

[![NPM](https://nodei.co/npm/amazon-pay-async.png)](https://nodei.co/npm/amazon-pay-async/)

``` sh
npm i amazon-pay-async
```

## Description:

API wrapper for Amazon Pay using promises and offer defined types for Typescript moduls.

## Usage:

Instantiate an amazonPayment instance with the environment variable, and all required config parameters.

The `AmazonPayClient` class has a public, static property called `Environments` which is an enum containing four properties: `Production` and `Sandbox`, pass one of these in the configuration object. Use `ProductionEU` and `SandboxEU` for European countries.

__Example:__

``` js
import AmazonPayClient from 'amazon-pay-async';
var client = new AmazonPayClient({
  clientId: 'Client ID'
  mwsAccessKey: 'MWS Access Key',
  mwsSecretKey: 'MWS Secret Key',
  sellerId: 'Amazon Seller ID',
  environment: AmazonPayClient.Environments.Production,
});
```

## Note about request parameters

This module will automatically sign all requests and convert nested objects to dot notation.

__Example:__
``` js
await client.offAmazonPayments.refund({
  AmazonCaptureId: 'Amazon capture ID',
  RefundReferenceId: 'Refund Reference ID',
  RefundAmount: {
    Amount: 123.45,
    CurrencyCode: 'USD'
  }
})
```
Will make a call with the following parameters:
``` json
{
  "AmazonCaptureId": "Amazon capture ID",
  "RefundReferenceId": "Refund Reference ID",
  "RefundAmount.Amount": 123.45,
  "RefundAmount.CurrencyCode": "USD"
}
```

## API documentation

As the module offers pre-defined types for Typescript modules, here's a TS example:

__Example:__
``` js
import { IRefundRequest, IRefundResponse } from 'amazon-pay-async';
const refundResponse: IRefundResponse = await client.offAmazonPayments.refund({
  AmazonCaptureId: 'Amazon capture ID',
  RefundReferenceId: 'Refund Reference ID',
  RefundAmount: {
    Amount: 123.45,
    CurrencyCode: 'USD'
  }
} as IRefundRequest);
```

## Note: 
This is a mirrored version of the https://github.com/MadisonReed/amazon-payments package. For any usage information regarding version 0.x please refer for the original package.
