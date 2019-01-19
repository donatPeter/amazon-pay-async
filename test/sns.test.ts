import 'jest';
import { Amazon } from '../lib/amazon';

describe('==snsResponse tests==', () => {
  describe('parseSNSResponse', () => {
    it('should return with an error if the certificate is hosted on an invalid host', async () => {
      const response = {
        Message: 'A message for you!',
        MessageId: '1',
        Signature: 'gibberish',
        SignatureVersion: '1',
        SigningCertURL: 'https://sns.us-east-1.notamazonaws.com/cert.pem',
        Timestamp: (new Date()).toISOString(),
        TopicArn: 'arn',
        Type: 'Notification',
      };
      try {
        await Amazon.parseSNSResponse(response);
      } catch (err) {
        expect(err.type).toBe('invalid_certificate_domain');
      }
    });
  });
});
