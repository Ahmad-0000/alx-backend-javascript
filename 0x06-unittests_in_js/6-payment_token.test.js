const chai = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;
describe('getPaymentTokenFromAPI', function () {
  it('tests getPaymentTokenFromAPI function', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      expect(data.data).to.equal('Successful response from the API');
      done();
    }).catch((error) => {
      done(error);
    });
  });
});
