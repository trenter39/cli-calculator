const assert = require('assert');
const calculator = require('../src/calculator');

describe('Calculator', () => {

    // Basic arithmetic
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

    // Extended operations
    it('modulus 10 % 4 to equal 2', () => {
        assert.strictEqual(calculator.mod(10, 4), 2);
    });

    it('power 4^2 to equal 16', () => {
        assert.strictEqual(calculator.pow(4, 2), 16);
    });

    it('maximum of 9 and 3 to equal 9', () => {
        assert.strictEqual(calculator.max(9, 3), 9);
    });

    it('minimum of 5 and 2 to equal to 2', () => {
        assert.strictEqual(calculator.min(5, 2), 2);
    });

    it('round of 4.5 to equal 5', () => {
        assert.strictEqual(calculator.round(4.5), 5);
    });

    it('round 2.3 to equal 2', () => {
        assert.strictEqual(calculator.round(2.3), 2);
    });

    it('square root of 16 to equal 4', () => {
        assert.strictEqual(calculator.sqrt(16), 4);
    });

    it('absolute value of -8 to equal 8', () => {
        assert.strictEqual(calculator.abs(-8), 8);
    });

    it('natual log of 1 to equal 0', () => {
        assert.strictEqual(calculator.log(1), 0);
    });

    it('factorial of 5 to equal 120', () => {
        assert.strictEqual(calculator.fact(5), 120);
    });

    it('factorial of 0 to equal 1', () => {
        assert.strictEqual(calculator.fact(0), 1);
    });
});