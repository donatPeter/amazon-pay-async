import { BillingAgreementConstraintIds } from '../constraints/billing.agreement.constraints';
import { OrderReferenceConstraintIds } from '../constraints/order.reference.constraints';

export interface IConstraint {
  ConstraintID: BillingAgreementConstraintIds | OrderReferenceConstraintIds;
  Description: string;
}
