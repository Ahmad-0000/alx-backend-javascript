const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('Testing how a function used', function () {
  it('tests how Utils.calculateNumber used', function () {
    const calculateNumberStats = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    calculateNumberStats.usedWith = calculateNumberStats.calledWith;
    expect(calculateNumberStats.usedWith('SUM', 100, 20)).to.be.true;
  });
});
