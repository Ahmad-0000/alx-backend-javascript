const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const process = require('process')
const expect = chai.expect;

describe('Testing how a function is used', function () {
  beforeEach(() => {
    const logStats = sinon.spy(console, "log");
  });
  it('tests how "console.log" is used', function () {

    sendPaymentRequestToApi(100, 20);
    console.log.usedOnce = console.log.calledOnce;
    console.log.usedWith = console.log.calledWith;
    expect(console.log.usedOnce).to.be.true;
    expect(console.log.usedWith('The total is: 120')).to.be.true;
  });

  it('tests how "console.log" is used', function () {

    sendPaymentRequestToApi(10, 10);
    console.log.usedOnce = console.log.calledOnce;
    console.log.usedWith = console.log.calledWith;
    expect(console.log.usedOnce).to.be.true;
    expect(console.log.usedWith('The total is: 20')).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
