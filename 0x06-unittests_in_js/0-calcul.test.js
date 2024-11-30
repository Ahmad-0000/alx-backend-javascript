const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('Tests', function () {
  it('tests whole integers', function () {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(1, 1), 2);
    assert.equal(calculateNumber(-1, -1), -2);
    assert.equal(calculateNumber(-1, 1), 0);
    assert.equal(calculateNumber(1, -1), 0);
  });

  it('tests floats with fractional part < 0.5', function () {
    assert.equal(calculateNumber(0.4, 0.3), 0);
    assert.equal(calculateNumber(1.2, 1.4), 2);
    assert.equal(calculateNumber(-1.4, -1.1), -2);
    assert.equal(calculateNumber(-1.4, 1.2), 0);
    assert.equal(calculateNumber(1.1, -1.2), 0); 
  });

  it('tests floats with fractional part === 0.5', function () {
    assert.equal(calculateNumber(0.5, 0.5), 2);
    assert.equal(calculateNumber(-1.5, -1.5), -2);
    assert.equal(calculateNumber(-1.5, 1.5), 1);
  });
  
  it('tests floats with fractional part > 0.5', function () {
    assert.equal(calculateNumber(0.6, 0.6), 2);
    assert.equal(calculateNumber(-1.6, -1.6), -4);
    assert.equal(calculateNumber(-1.9, 1.7), 0);
  });
});
