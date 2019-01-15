import 'jest';
import { attachSignature, composeParams, safeJSONParse } from './helpers';

describe('==param composition tests==', () => {
  describe('composeParams', () => {
    it('should not change a one-dimension object', () => {
      const params = {
        test1: 'test1Val',
        test2: 'test2Val',
      };
      const newParams = composeParams(params);
      expect(newParams.test1).toEqual(params.test1);
      expect(newParams.test2).toEqual(params.test2);
      expect(Object.keys(newParams).length).toBe(2);
    });

    it('should convert multi-dimensional objects to dot notation', () => {
      const params = {
        test1: 'test1Val',
        test2: {
          test3: 'test3Val',
          test4: 'test4Val',
        },
        test5: 'test5Val',
      };

      const newParams = composeParams(params);
      expect(newParams.test1).toEqual(params.test1);
      expect(newParams['test2.test3']).toEqual(params.test2.test3);
      expect(newParams['test2.test4']).toEqual(params.test2.test4);
      expect(Object.keys(newParams).length).toBe(4);
    });
  });

  describe('attachSignature', () => {
    it('should compose and attach a signature based on a given secret key', () => {
      const url = 'https://mws.amazonservices.com/OffAmazonPayments_Sandbox';
      const secret = 'thisIsMySuperSecretKey';
      const params = {
        test1: 'test1Val',
        test2: 'test2Val',
      };
      const sigParams = attachSignature(url, secret, params);
      expect(sigParams.test1).toEqual(params.test1);
      expect(sigParams.test2).toEqual(params.test2);
      expect(sigParams.SignatureMethod).toBe('HmacSHA256');
      expect(sigParams.SignatureVersion).toBe('2');
      expect(sigParams.Signature).toBe('r/Iae1ZvKIT+v3RqxAH0Fv5bK4KxOCf1jp0tJIBx5Mk=');
      expect(Object.keys(sigParams).length).toBe(5);
    });

    it('should correctly escape special characters', () => {
      const url = 'https://mws.amazonservices.com/OffAmazonPayments_Sandbox';
      const secret = 'thisIsMySuperSecretKey';
      const params = {
        test1: 'value * with non-alpha numeric special characters (like parenthesis, {braces}, [brackets], or others: ~`!@#$%^&*_+<>?:)',
        test2: 'ßπéçîå£ ü†ƒ çhå®åç†é®ß',
        test3: 'These are fine: -_.~',
      };
      const sigParams = attachSignature(url, secret, params);
      expect(sigParams.test1).toEqual(params.test1);
      expect(sigParams.test2).toEqual(params.test2);
      expect(sigParams.test3).toEqual(params.test3);
      expect(sigParams.SignatureMethod).toBe('HmacSHA256');
      expect(sigParams.SignatureVersion).toBe('2');
      expect(sigParams.Signature).toBe('+LC2vMBuR51S94bAVK9DctDJC0XQCZ4vmQ6CKBYyTf4=');
      expect(Object.keys(sigParams).length).toBe(6);
    });
  });

  describe('safeJSONParse', () => {
    it('should return with the input param if that is an object', () => {
      const params = {
        test1: 'test1Val',
        test2: 'test2Val',
      };
      const parsed = safeJSONParse(params);
      expect(params).toBe(parsed);
    });

    it('should return with the parsed object if the input param is a parseble string', () => {
      const params = {
        test1: 'test1Val',
        test2: 'test2Val',
      };
      const parsed = safeJSONParse(JSON.stringify(params));
      expect(params).toEqual(parsed);
    });
  });
});
