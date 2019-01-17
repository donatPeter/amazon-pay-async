export enum AuthorizationStatusReasons {
  InvalidPaymentMethod = 'InvalidPaymentMethod',
  AmazonRejected = 'AmazonRejected',
  ProcessingFailure = 'ProcessingFailure',
  TransactionTimedOut = 'TransactionTimedOut',
  ExpiredUnused = 'ExpiredUnused',
  MaxCapturesProcessed = 'MaxCapturesProcessed',
  AmazonClosed = 'AmazonClosed',
  OrderReferenceCanceled = 'OrderReferenceCanceled',
  SellerClosed = 'SellerClosed',
}
