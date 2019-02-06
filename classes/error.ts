enum ErrorTypes {
  badToken = 'bad_token',
  invalidCertificateDomain = 'invalid_certificate_domain',
  invalidSignatureVersion = 'invalid_signature_version',
  parseError = 'parse_error',
  signatureMismatch = 'signature_mismatch',
}

class AmazonError extends Error {
  private type: string;
  constructor(type: string, message: string) {
    super(message);
    this.type = type;
  }
}

export class ApiError extends AmazonError {
  private body: any;
  constructor(type: string, message: string, body: any) {
    super(type, message);
    this.body = body;
  }
}

export class BadToken extends Error {
  public message: string;
  private readonly type: string = ErrorTypes.badToken;
  private body: any;
  constructor(message: string, body?: any) {
    super(message);
    this.message = message;
    this.body = body;
  }
}

export class ParseError extends Error {
  public message: string;
  private readonly type: string = ErrorTypes.parseError;
  private body: any;
  constructor(message: string, body?: any) {
    super(message);
    this.message = message;
    this.body = body;
  }
}

export class InvalidCertificateDomain extends Error {
  public message: string;
  private readonly type: string = ErrorTypes.invalidCertificateDomain;
  private body: any;
  constructor(message: string, body?: any) {
    super(message);
    this.message = message;
    this.body = body;
  }
}

export class SignatureMismatch extends Error {
  public message: string;
  private readonly type: string = ErrorTypes.signatureMismatch;
  private body: any;
  constructor(message: string, body?: any) {
    super(message);
    this.message = message;
    this.body = body;
  }
}

export class InvalidSignatureVersion extends Error {
  public message: string;
  private readonly type: string = ErrorTypes.invalidSignatureVersion;
  private body: any;
  constructor(message: string, body?: any) {
    super(message);
    this.message = message;
    this.body = body;
  }
}
