export interface IStatus {
  State: State;
  LastUpdateTimestamp: Date;
  ReasonCode: string;
  ReasonDescription: string;
}

enum State {
  Pending = 'Pending',
  Open = 'Open',
  Declined = 'Declined',
  Closed = 'Closed',
  Completed = 'Completed',
}
