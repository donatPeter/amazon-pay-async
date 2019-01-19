import 'jest';
import { EnvironmentEnum, IConfiguration } from '../../classes/config';
import { Amazon } from '../../lib/amazon';
import { OffAmazonPayments } from '../../lib/offAmazonPayments';

const config: IConfiguration = {
  clientId: 'clientId',
  environment: EnvironmentEnum.SandboxEU,
  mwsAccessKey: 'mwsAccessKey',
  mwsSecretKey: 'mwsSecretKey',
  sellerId: 'sellerId',
};

describe('OffAmazonPayments', () => {
  let offAmazonPayments: OffAmazonPayments;
  beforeEach(() => {
    offAmazonPayments = new OffAmazonPayments(config);
  });

  const methodNames = Object.getOwnPropertyNames(OffAmazonPayments.prototype)
    .filter((methodName) => methodName !== 'constructor');

  for (const methodName of methodNames) {
    it(`${methodName} should call the callMwsMethod`, async () => {
      const spy = jest.spyOn(Amazon.prototype, 'callMwsMethod').mockResolvedValue({});
      offAmazonPayments[methodName]();

      expect(spy).toHaveBeenCalled();
    });

    it(`${methodName} should re-throw the error in case of any failure`, async () => {
      jest.spyOn(Amazon.prototype, 'callMwsMethod').mockRejectedValue(new Error('re-throwed error message'));

      let error: any;
      try {
        await offAmazonPayments[methodName]();
      } catch (err) {
        error = err;
      }
      expect(error.message).toBe('re-throwed error message');
    });
  }
});
