const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const expects = chai.expect;

describe('Tests calculateNumber function', function () {
  it('tests whole numbers with SUM', function () {
    expects(calculateNumber('SUM', 0, 0)).to.equal(0);
    expects(calculateNumber('SUM', 1, 1)).to.equal(2);
    expects(calculateNumber('SUM', -1, -1)).to.equal(-2);
    expects(calculateNumber('SUM', -1, 1)).to.equal(0);
  });
  
  it('tests whole numbers with SUBTRACT', function () {
    expects(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expects(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
  });

  it('tests whole numbers with DIVIDE', function () {
    expects(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    expects(calculateNumber('DIVIDE', 20, 4)).to.equal(5);
    expects(calculateNumber('DIVIDE', 21, 2)).to.equal(10.5);
    expects(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1, -1)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
  });
  
  it('tests float numbers with fraction part < 0.5 and SUM', function () {
    expects(calculateNumber('SUM', 0.3, 0.4)).to.equal(0);
    expects(calculateNumber('SUM', 1.2, 1.12)).to.equal(2);
    expects(calculateNumber('SUM', -1.4, -1.3)).to.equal(-2);
    expects(calculateNumber('SUM', -1.23, 1.1123)).to.equal(0);
  });

  it('tests float numbers with fraction part === 0.5 and SUM', function () {
    expects(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    expects(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
    expects(calculateNumber('SUM', -1.5, -1.5)).to.equal(-2);
    expects(calculateNumber('SUM', -1.5, 1.5)).to.equal(1);
  });
  it('tests float numbers with fraction part > 0.5 and SUM', function () {
    expects(calculateNumber('SUM', 0.6, 0.7)).to.equal(2);
    expects(calculateNumber('SUM', 1.6, 1.6)).to.equal(4);
    expects(calculateNumber('SUM', -1.7, -1.6)).to.equal(-4);
    expects(calculateNumber('SUM', -1.6, 1.7)).to.equal(0);
  });


  it('tests float numbers with fraction part < 0.5 and SUBTRACT', function () {
    expects(calculateNumber('SUBTRACT', 0.3, 0.4)).to.equal(0);
    expects(calculateNumber('SUBTRACT', 1.2, 1.12)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.4, -1.3)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.23, 1.1123)).to.equal(-2);
  });

  it('tests float numbers with fraction part === 0.5 and SUBTRACT', function () {
    expects(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
    expects(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.5, -1.5)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.5, 1.5)).to.equal(-3);
  });
  it('tests float numbers with fraction part > 0.5 and SUBTRACT', function () {
    expects(calculateNumber('SUBTRACT', 0.6, 0.7)).to.equal(0);
    expects(calculateNumber('SUBTRACT', 1.6, 1.6)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.7, -1.6)).to.equal(0);
    expects(calculateNumber('SUBTRACT', -1.6, 1.7)).to.equal(-4);
  });

  it('tests float numbers with fraction part < 0.5 and DIVIDE', function () {
    expects(calculateNumber('DIVIDE', 0.3, 0.4)).to.equal('Error');
    expects(calculateNumber('DIVIDE', 42.3, 0.4)).to.equal('Error');
    expects(calculateNumber('DIVIDE', 1.2, 1.12)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.4, -1.3)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.23, 1.1123)).to.equal(-1);
  });

  it('tests float numbers with fraction part === 0.5 and DIVIDE', function () {
    expects(calculateNumber('DIVIDE', 0.5, 0.5)).to.equal(1);
    expects(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.5, -1.5)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.5, 1.5)).to.equal(-0.5);
  });

  it('tests float numbers with fraction part > 0.5 and DIVIDE', function () {
    expects(calculateNumber('DIVIDE', 0.6, 0.7)).to.equal(1);
    expects(calculateNumber('DIVIDE', 1.6, 1.6)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.7, -1.6)).to.equal(1);
    expects(calculateNumber('DIVIDE', -1.6, 1.7)).to.equal(-1);
  });
})
