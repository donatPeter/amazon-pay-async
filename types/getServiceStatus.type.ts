export interface IGetServiceStatusResponse {
  Status: Status;
  TimeStamp: Date;
  MessageId?: string;
  Messages?: any;
  Message?: string;
}

enum Status {
  GREEN = 'GREEN',
  GREEN_I = 'GREEN_I',
  YELLOW = 'YELLOW',
  RED = 'RED',
}
