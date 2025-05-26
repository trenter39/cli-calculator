const assert = require('assert');
const calculator = require('../src/calculator');

describe('Calculator', () => {
    it('adds 2 + 3 to equal 5', () => {
        assert.strictEqual(calculator.add(2, 3), 5);
    });

    it('subtracts 5 - 2 equal 3', () => {
        assert.strictEqual(calculator.sub(5, 2), 3);
    });

    it('multiplies 3 * 4 to equal 12', () => {
        assert.strictEqual(calculator.mul(3, 4), 12);
    });

    it('divides 10 / 2 to equal 5', () => {
        assert.strictEqual(calculator.div(10, 2), 5);
    });
});