import 'jest';
import { EnvironmentEnum, IConfiguration } from '../../classes/config';
import { Amazon } from '../../lib/amazon';
import { Reports } from '../../lib/reports';

const config: IConfiguration = {
  clientId: 'clientId',
  environment: EnvironmentEnum.SandboxEU,
  mwsAccessKey: 'mwsAccessKey',
  mwsSecretKey: 'mwsSecretKey',
  sellerId: 'sellerId',
};

describe('Reports', () => {
  let reports: Reports;
  beforeEach(() => {
    reports = new Reports(config);
  });

  const methodNames = Object.getOwnPropertyNames(Reports.prototype)
    .filter((methodName) => methodName !== 'constructor');

  for (const methodName of methodNames) {
    it(`${methodName} should call the callMwsMethod`, async () => {
      const spy = jest.spyOn(Amazon.prototype, 'callMwsMethod').mockResolvedValue({});
      reports[methodName]();

      expect(spy).toHaveBeenCalled();
    });

    it(`${methodName} should re-throw the error in case of any failure`, async () => {
      jest.spyOn(Amazon.prototype, 'callMwsMethod').mockRejectedValue(new Error('re-throwed error message'));

      let error: any;
      try {
        await reports[methodName]();
      } catch (err) {
        error = err;
      }
      expect(error.message).toBe('re-throwed error message');
    });
  }
});
