const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('Tests calculateNumber function', function () {
  it('tests whole numbers with SUM', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
    assert.equal(calculateNumber('SUM', 1, 1), 2);
    assert.equal(calculateNumber('SUM', -1, -1), -2);
    assert.equal(calculateNumber('SUM', -1, 1), 0);
  });
  
  it('tests whole numbers with SUBTRACT', function () {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
    assert.equal(calculateNumber('SUBTRACT', -1, -1), 0);
    assert.equal(calculateNumber('SUBTRACT', -1, 1), -2);
  });

  it('tests whole numbers with DIVIDE', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 20, 4), 5);
    assert.equal(calculateNumber('DIVIDE', 21, 2), 10.5);
    assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
    assert.equal(calculateNumber('DIVIDE', -1, -1), 1);
    assert.equal(calculateNumber('DIVIDE', -1, 1), -1);
  });
  
  it('tests float numbers with fraction part < 0.5 and SUM', function () {
    assert.equal(calculateNumber('SUM', 0.3, 0.4), 0);
    assert.equal(calculateNumber('SUM', 1.2, 1.12), 2);
    assert.equal(calculateNumber('SUM', -1.4, -1.3), -2);
    assert.equal(calculateNumber('SUM', -1.23, 1.1123), 0);
  });

  it('tests float numbers with fraction part === 0.5 and SUM', function () {
    assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
    assert.equal(calculateNumber('SUM', 1.5, 1.5), 4);
    assert.equal(calculateNumber('SUM', -1.5, -1.5), -2);
    assert.equal(calculateNumber('SUM', -1.5, 1.5), 1);
  });
  it('tests float numbers with fraction part > 0.5 and SUM', function () {
    assert.equal(calculateNumber('SUM', 0.6, 0.7), 2);
    assert.equal(calculateNumber('SUM', 1.6, 1.6), 4);
    assert.equal(calculateNumber('SUM', -1.7, -1.6), -4);
    assert.equal(calculateNumber('SUM', -1.6, 1.7), 0);
  });


  it('tests float numbers with fraction part < 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.3, 0.4), 0);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 1.12), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.4, -1.3), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.23, 1.1123), -2);
  });

  it('tests float numbers with fraction part === 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.5, -1.5), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.5, 1.5), -3);
  });
  it('tests float numbers with fraction part > 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.6, 0.7), 0);
    assert.equal(calculateNumber('SUBTRACT', 1.6, 1.6), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.7, -1.6), 0);
    assert.equal(calculateNumber('SUBTRACT', -1.6, 1.7), -4);
  });

  it('tests float numbers with fraction part < 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber('DIVIDE', 0.3, 0.4), 'Error');
    assert.equal(calculateNumber('DIVIDE', 42.3, 0.4), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1.2, 1.12), 1);
    assert.equal(calculateNumber('DIVIDE', -1.4, -1.3), 1);
    assert.equal(calculateNumber('DIVIDE', -1.23, 1.1123), -1);
  });

  it('tests float numbers with fraction part === 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber('DIVIDE', 0.5, 0.5), 1);
    assert.equal(calculateNumber('DIVIDE', 1.5, 1.5), 1);
    assert.equal(calculateNumber('DIVIDE', -1.5, -1.5), 1);
    assert.equal(calculateNumber('DIVIDE', -1.5, 1.5), -0.5);
  });

  it('tests float numbers with fraction part > 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber('DIVIDE', 0.6, 0.7), 1);
    assert.equal(calculateNumber('DIVIDE', 1.6, 1.6), 1);
    assert.equal(calculateNumber('DIVIDE', -1.7, -1.6), 1);
    assert.equal(calculateNumber('DIVIDE', -1.6, 1.7), -1);
  });
})
