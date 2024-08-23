const calculateNumber = require('./1-calcul')
const assert = require('assert');
describe('calculateNumber', function() {
  it('check sum', function() {
    assert(calculateNumber('SUM', 1.4, 4.5) == 6);
  });
  it('check subtraction ', function() {
    assert(calculateNumber('SUBTRACT', 1.4, 4.5) == -4);
  });
  it('check division', function() {
    assert(calculateNumber('DIVIDE', 1.4, 4.5) == 0.2);
  });
  it('check division', function() {
    assert(calculateNumber('DIVIDE', 1.4, 0) == 'Error');
  });
});
