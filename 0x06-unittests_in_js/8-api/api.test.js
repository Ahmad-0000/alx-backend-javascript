const requests = require('request');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;


describe('Test API', function () {
  it('tests root route status code', function () {
    requests.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        throw error;
      } else if (response) {
        expect(response.statusCode).to.equal(200);
      }
    });
  });

  it('tests root route response body', function() {
    requests.get("http://localhost:7865/", (error, res, body) => {
      if (error) {
        throw error;
      } else {
	expect(body).to.equal('Welcome to the payment system');
      }
    });
  });
});
