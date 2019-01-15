// const amazon = require('../amazonPayments');

// const client = amazon.connect({});


// describe('ocemw', () => {
//   it('ce', async () => {
//     try {
//       await client.offAmazonPayments.cancelOrderReference();
//     } catch (err) {
//       console.log(err);
//     } finally {
//       console.log('no errr');
//     }
//   });
// });

import { SandboxEU } from '../classes/environment';
import { Amazon } from '../lib/amazon';
import { OffAmazonPayments } from '../lib/offAmazonPayments';

const amazon = new Amazon({
  clientId: 'amzn1.application-oa2-client.b36d83aea5a34a10a42f01da30bfa931',
  environment: SandboxEU,
  mwsAccessKey: 'AKIAI3QL3BNGEMSHO6KA',
  mwsSecretKey: '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',
  sellerId: 'A3KZP912WVEKM3',
});

const op = new OffAmazonPayments({
  clientId: 'amzn1.application-oa2-client.b36d83aea5a34a10a42f01da30bfa931',
  environment: SandboxEU,
  mwsAccessKey: 'AKIAI3QL3BNGEMSHO6KA',
  mwsSecretKey: '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------------',
  sellerId: 'A3KZP912WVEKM3',
});

const callIt = async () => {
  try {
    const r = await amazon.callMwsMethod('GetServiceStatus', '2013-01-01');
    const r2 = await op.getServiceStatus();
    return r;
  } catch (err) {
    return err;
  }
};

const res = callIt();
