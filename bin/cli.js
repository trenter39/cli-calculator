const { add, sub, mul, div } = require('../src/calculator');

const [,,operation, a, b] = process.argv;

if (!operation || !a || !b) {
    console.log("Usage: calc <add|subtract> <num1> <num2>");
    process.exit(1);
}

const num1 = parseFloat(a);
const num2 = parseFloat(b);

if(isNaN(num1) || isNaN(num2)){
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
}

let result;

switch (operation) {
    case 'add':
        result = add(num1, num2);
        break;
    case 'sub':
        result = sub(num1, num2);
        break;
    case 'mul':
        result = mul(num1, num2);
        break;
    case 'div':
        result = div(num1, num2);
        break;
    default:
        console.log("Unknown operation. Use add, sub, mul, or div.");
        process.exit(1);
}

console.log(`Result: ${result}`);