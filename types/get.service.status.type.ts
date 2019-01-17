import { ServiceStatus } from './enums/service.status.enum';

export interface IGetServiceStatusResponse {
  Status: ServiceStatus;
  TimeStamp: Date;
  MessageId?: string;
  Messages?: any;
  Message?: string;
}
