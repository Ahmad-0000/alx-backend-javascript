const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const expect = chai.expect;
describe('Tests calculateNumber function', function () {
  it('tests whole numbers with SUM', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
    expect(calculateNumber('SUM', -1, 1)).to.equal(0);
  });
  
  it('tests whole numbers with SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
  });

  it('tests whole numbers with DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 20, 4)).to.equal(5);
    expect(calculateNumber('DIVIDE', 21, 2)).to.equal(10.5);
    expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1, -1)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
  });
  
  it('tests float numbers with fraction part < 0.5 and SUM', function () {
    expect(calculateNumber('SUM', 0.3, 0.4)).to.equal(0);
    expect(calculateNumber('SUM', 1.2, 1.12)).to.equal(2);
    expect(calculateNumber('SUM', -1.4, -1.3)).to.equal(-2);
    expect(calculateNumber('SUM', -1.23, 1.1123)).to.equal(0);
  });

  it('tests float numbers with fraction part === 0.5 and SUM', function () {
    expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
    expect(calculateNumber('SUM', -1.5, -1.5)).to.equal(-2);
    expect(calculateNumber('SUM', -1.5, 1.5)).to.equal(1);
  });
  it('tests float numbers with fraction part > 0.5 and SUM', function () {
    expect(calculateNumber('SUM', 0.6, 0.7)).to.equal(2);
    expect(calculateNumber('SUM', 1.6, 1.6)).to.equal(4);
    expect(calculateNumber('SUM', -1.7, -1.6)).to.equal(-4);
    expect(calculateNumber('SUM', -1.6, 1.7)).to.equal(0);
  });


  it('tests float numbers with fraction part < 0.5 and SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 0.3, 0.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.2, 1.12)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.4, -1.3)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.23, 1.1123)).to.equal(-2);
  });

  it('tests float numbers with fraction part === 0.5 and SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.5, -1.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.5, 1.5)).to.equal(-3);
  });
  it('tests float numbers with fraction part > 0.5 and SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 0.6, 0.7)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.6, 1.6)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.7, -1.6)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -1.6, 1.7)).to.equal(-4);
  });

  it('tests float numbers with fraction part < 0.5 and DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 0.3, 0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 42.3, 0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.2, 1.12)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.4, -1.3)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.23, 1.1123)).to.equal(-1);
  });

  it('tests float numbers with fraction part === 0.5 and DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 0.5, 0.5)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.5, -1.5)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.5, 1.5)).to.equal(-0.5);
  });

  it('tests float numbers with fraction part > 0.5 and DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 0.6, 0.7)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1.6, 1.6)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.7, -1.6)).to.equal(1);
    expect(calculateNumber('DIVIDE', -1.6, 1.7)).to.equal(-1);
  });
})
