const requests = require('request');
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

describe('Test API', function () {
  it('tests root route', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw new Error();
      } else if (response) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.contain('Welcome to the payment system');
      }
    });
  });
});
