export class AmazonResponse {
  private method: string;
  private rawResponse: any;
  private primaryKey: string;
  private subKey: string;
  constructor(method: string, rawResponse: any, primaryKey?: string, subKey?: string) {
    this.method = method;
    this.rawResponse = rawResponse;
    this.primaryKey = primaryKey || `${this.method}Response`;
    this.subKey = subKey || `${this.method}Result`;
  }

  public get response() {
    if (!this.rawResponse[this.primaryKey]) {
      return this.rawResponse;
    }

    const response = this.rawResponse[this.primaryKey];
    const result = response[this.subKey];

    if (response.ResponseMetadata) {
      Object.defineProperty(this, 'requestId', {
        enumerable: false,
        get() {
          return response.ResponseMetadata.RequestId;
        },
      });
    }

    return result;
  }
}
