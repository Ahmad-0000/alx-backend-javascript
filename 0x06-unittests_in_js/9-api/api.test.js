const requests = require('request');
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

describe('Test API', function () {
  it('tests status code', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw new Error();
      } else if (response) {
        expect(response.statusCode).to.equal(200);
      }
    });
  });
  it('tests body content', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw new Error();
      } else if (body) {
        expect(body).to.equal('Welcome to the payment system');
      } else {
        throw new Error();
      }
    });
  });

  it('tests the presence of GET /cart/:number', function () {
    requests.get('http://localhost:7865/cart/100', (error, response, body) => {
      if (error) {
        throw new Error();
      } else if (response) {
        expect(response.statusCode).to.equal(200);
      } else {
        expect(response.statusCode).to.equal(404);
      }
      if (body && response.statusCode === 200) {
        expect(body).to.equal('Payment methods for cart 100');
      } else if (bodu && response.statusCode === 404) {
        expect(body).to.not.equal('Payment methods for cart 100');
      }
    });
  });

  it('tests response of GET /cart/:notANumber', function () {
    requests.get('http://localhost:7865/cart/invalid', (error, response, body) => {
      if (error) {
        throw new Error();
      } else if (response) {
        expect(response.statusCode).to.equal(404);
      }
    });
  });
});
