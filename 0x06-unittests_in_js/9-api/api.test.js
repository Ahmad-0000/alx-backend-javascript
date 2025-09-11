const requests = require('request');
const chai = require('chai');

const expect = chai.expect;

describe('Test API', function () {
  it('tests index page status code', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw error;
      }
      expect(response.statusCode).to.equal(200);
    });
  });

  it('tests index page body content', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw error;
      }
      expect(body).to.equal('Welcome to the payment system');
    });
  });

  it('GET /cart/:id works with numbers', function () {
    requests.get('http://localhost:7865/cart/100', (error, response, body) => {
      if (error) {
        throw error;
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 100');
    });
  });

  it('GET /cart/:id doesn\'t work with arguments other than numbers', function () {
    requests.get('http://localhost:7865/cart/invalidID', (error, response, body) => {
      if (error) {
        throw error;
      }
      expect(response.statusCode).to.equal(404);
    });
  });
});
