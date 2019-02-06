export interface ISNSResponse {
  Message: string;
  MessageId: string;
  Signature: string;
  SignatureVersion: string;
  SigningCertURL: string;
  Subject?: string;
  SubscribeURL?: string;
  Timestamp: string;
  Token?: string;
  TopicArn: string;
  Type: string;
  [key: string]: string | undefined;
}
