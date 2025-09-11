const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const {afterEach} = require('mocha');

const expect = chai.expect;
afterEach(() => {
  sinon.restore();
});

describe('Testing how a function used', function () {
  it('tests how Utils.calculateNumber used', function () {
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber");
    const consoleLogStats = sinon.spy(console, "log");
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    calculateNumberStub.usedWith = calculateNumberStub.calledWith.bind(calculateNumberStub);
    consoleLogStats.usedWith = consoleLogStats.calledWith.bind(consoleLogStats);
    expect(calculateNumberStub.usedWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber()).to.equal(10);
    expect(consoleLogStats.usedWith('The total is: 10')).to.be.true;
  });
});
