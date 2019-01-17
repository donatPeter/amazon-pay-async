export enum OrderReferenceStatusReasons {
  InvalidPaymentMethod = 'InvalidPaymentMethod',
  SellerCanceled = 'SellerCanceled',
  Stale = 'Stale',
  AmazonCanceled = 'AmazonCanceled',
  Expired = 'Expired',
  MaxAmountCharged = 'MaxAmountCharged',
  MaxAuthorizationsProcessed = 'MaxAuthorizationsProcessed',
  MaxAuthorizationsCaptured = 'MaxAuthorizationsCaptured',
  AmazonClosed = 'AmazonClosed',
  SellerClosed = 'SellerClosed',
}
