const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('Testing how a function used', function () {
  it('tests how Utils.calculateNumber used', function () {
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber");
    const consoleLogStats = sinon.spy(console, "log");
    Utils.calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    Utils.calculateNumber.usedWith = Utils.calculateNumber.calledWith;
    consoleLogStats.usedWith = consoleLogStats.calledWith;
    expect(Utils.calculateNumber.usedWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber()).to.equal(10);
    expect(consoleLogStats.usedWith('The total is: 10')).to.be.true;
    Utils.calculateNumber.restore();
    consoleLogStats.restore();
  });
});
