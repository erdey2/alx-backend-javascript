const calculateNumber = require('./1-calcul')
const assert = require('assert');
describe('calculateNumber', function() {
  it('check sum', function() {
    strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('check subtraction ', function() {
    strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('check division', function() {
    strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('check division', function() {
    strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
