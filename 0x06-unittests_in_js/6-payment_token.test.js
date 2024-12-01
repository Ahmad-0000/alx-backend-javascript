const chai = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;
describe('getPaymentTokenFromAPI', function () {
  it('tests getPaymentTokenFromAPI function', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({data: 'Successful response from the API'});
    });
    done();
  });
});
