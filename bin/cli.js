const readline = require('readline');
const { add, sub, mul, div } = require('../src/calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'calc> '
});

console.log('Welcome to CLI Calculator! Type "help" for usage instructions.');

rl.prompt();

rl.on('line', (line) => {
    const input = line.trim();
    if (input === 'help' || input === '--help' || input === '-h') {
        console.log(`
CLI Calculator Help!
            
Usage:
    calc> <operation> <num1> <num2>
            
Operations:
    add - Add two numbers: add 5 3
    sub - Subtract two numbers: sub 10 2
    mul - Multiply two numbers: mul 4 3
    div - Divide two numbers: div 8 2

Type Ctrl + C to exit.
        `);
        rl.prompt();
        return;
    }
    const [operation, aStr, bStr] = line.trim().split(' ');
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);

    if (isNaN(a) || isNaN(b)) {
        console.error('Error: Both arguments must be valid numbers.');
    } else {
        let result;
        switch (operation) {
            case 'add': result = add(a, b); break;
            case 'sub': result = sub(a, b); break;
            case 'mul': result = mul(a, b); break;
            case 'div': result = div(a, b); break;
            default:
                console.error('Unknown operation. Type "help" for available commands.');
                rl.prompt();
                return;
        }
        console.log(`Result: ${result}`);
    }

    rl.prompt();
}).on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
});