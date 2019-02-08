import * as crypto from 'crypto';
import * as URL from 'url';

interface IObject {
  [key: string]: any;
}

export function composeParams(params: IObject, label?: string, composed?: any) {
  composed = safeObjectCast(composed);
  params = safeObjectCast(params);

  Object.keys(params).forEach((key: string) => {
    const value = params[key];
    const newLabel = label ? `${label}.${key}` : key;

    if (isObject(value)) {
      composeParams(value, newLabel, composed);
    } else {
      composed[newLabel] = value;
    }
  });

  return composed;
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function attachSignature(url: string, secret: string, params: any) {
  params.SignatureMethod = 'HmacSHA256';
  params.SignatureVersion = '2';

  const sortedParams = Object.keys(params).sort((a, b) => (a === b ? 0 : a < b ? -1 : 1)).map((key) => `${RFC3986Encode(key)}=${RFC3986Encode(params[key])}`).join('&');

  const parsedUrl = URL.parse(url);

  const hmac = crypto.createHmac('SHA256', secret);
  const stringToSign = [
    'POST',
    parsedUrl.hostname,
    (parsedUrl.pathname || '/'),
    sortedParams,
  ].join('\n');
  hmac.update(stringToSign);

  params.Signature = hmac.digest('base64');
  return params;
}

export function safeJSONParse(data: any) {
  let parsed: object;
  try {
    parsed = JSON.parse(data);
  } catch (e) {
    parsed = data;
  }
  return parsed;
}

function safeObjectCast(obj: any) {
  if (!isObject(obj)) {
    return {};
  }
  return obj;
}

function RFC3986Encode(str: string) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`);
}
