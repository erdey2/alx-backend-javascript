const calculateNumber = require('./0-calcul');

const assert = require('assert');

describe('calculateNumber', function() {
  it('Whole positive numbers', function() {
    assert(calculateNumber(1, 3) == 4);
  });

  it('one whole and one decimal ', function() {
    assert(calculateNumber(1, 3.7) == 4);
  });
  
  it('two decimal sum less than 5', function() {
    assert(calculateNumber(1.2, 3.7) == 4);
  });
  it('two decimal sum greater than 5', function() {
    assert(calculateNumber(1.5, 3.7) == 4);
  });
});
