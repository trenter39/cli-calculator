function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }
function mod(a, b) { return a % b; }
function pow(a, b) { return a ** b; }
function max(a, b) { return Math.max(a, b); }
function min(a, b) { return Math.min(a, b); }
function round(a) { return Math.round(a); }
function sqrt(a) { return Math.sqrt(a); }
function abs(a) { return Math.abs(a); }
function log(a) { return Math.log(a); }
function fact(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    return n * fact(n - 1);
}

module.exports = {
    add, sub, mul, div,
    mod, pow, max, min,
    round, sqrt, abs, log, fact
};