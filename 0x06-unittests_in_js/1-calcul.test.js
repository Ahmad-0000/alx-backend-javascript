const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('Tests calculateNumber function', function () {
  it('tests whole numbers with SUM', function () {
    assert.equal(calculateNumber(0, 0, 'SUM'), 0);
    assert.equal(calculateNumber(1, 1, 'SUM'), 2);
    assert.equal(calculateNumber(-1, -1, 'SUM'), -2);
    assert.equal(calculateNumber(-1, 1, 'SUM'), 0);
  });
  
  it('tests whole numbers with SUBTRACT', function () {
    assert.equal(calculateNumber(0, 0, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(1, 1, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1, -1, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1, 1, 'SUBTRACT'), -2);
  });

  it('tests whole numbers with DIVIDE', function () {
    assert.equal(calculateNumber(1, 0, 'DIVIDE'), 'Error');
    assert.equal(calculateNumber(20, 4, 'DIVIDE'), 5);
    assert.equal(calculateNumber(21, 2, 'DIVIDE'), 10.5);
    assert.equal(calculateNumber(1, 1, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1, -1, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1, 1, 'DIVIDE'), -1);
  });
  
  it('tests float numbers with fraction part < 0.5 and SUM', function () {
    assert.equal(calculateNumber(0.3, 0.4, 'SUM'), 0);
    assert.equal(calculateNumber(1.2, 1.12, 'SUM'), 2);
    assert.equal(calculateNumber(-1.4, -1.3, 'SUM'), -2);
    assert.equal(calculateNumber(-1.23, 1.1123, 'SUM'), 0);
  });

  it('tests float numbers with fraction part === 0.5 and SUM', function () {
    assert.equal(calculateNumber(0.5, 0.5, 'SUM'), 2);
    assert.equal(calculateNumber(1.5, 1.5, 'SUM'), 4);
    assert.equal(calculateNumber(-1.5, -1.5, 'SUM'), -2);
    assert.equal(calculateNumber(-1.5, 1.5, 'SUM'), 1);
  });
  it('tests float numbers with fraction part > 0.5 and SUM', function () {
    assert.equal(calculateNumber(0.6, 0.7, 'SUM'), 2);
    assert.equal(calculateNumber(1.6, 1.6, 'SUM'), 4);
    assert.equal(calculateNumber(-1.7, -1.6, 'SUM'), -4);
    assert.equal(calculateNumber(-1.6, 1.7, 'SUM'), 0);
  });


  it('tests float numbers with fraction part < 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber(0.3, 0.4, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(1.2, 1.12, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.4, -1.3, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.23, 1.1123, 'SUBTRACT'), -2);
  });

  it('tests float numbers with fraction part === 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber(0.5, 0.5, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(1.5, 1.5, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.5, -1.5, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.5, 1.5, 'SUBTRACT'), -3);
  });
  it('tests float numbers with fraction part > 0.5 and SUBTRACT', function () {
    assert.equal(calculateNumber(0.6, 0.7, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(1.6, 1.6, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.7, -1.6, 'SUBTRACT'), 0);
    assert.equal(calculateNumber(-1.6, 1.7, 'SUBTRACT'), -4);
  });

  it('tests float numbers with fraction part < 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber(0.3, 0.4, 'DIVIDE'), 'Error');
    assert.equal(calculateNumber(42.3, 0.4, 'DIVIDE'), 'Error');
    assert.equal(calculateNumber(1.2, 1.12, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.4, -1.3, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.23, 1.1123, 'DIVIDE'), -1);
  });

  it('tests float numbers with fraction part === 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber(0.5, 0.5, 'DIVIDE'), 1);
    assert.equal(calculateNumber(1.5, 1.5, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.5, -1.5, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.5, 1.5, 'DIVIDE'), -0.5);
  });

  it('tests float numbers with fraction part > 0.5 and DIVIDE', function () {
    assert.equal(calculateNumber(0.6, 0.7, 'DIVIDE'), 1);
    assert.equal(calculateNumber(1.6, 1.6, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.7, -1.6, 'DIVIDE'), 1);
    assert.equal(calculateNumber(-1.6, 1.7, 'DIVIDE'), -1);
  });
})
