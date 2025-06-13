const readline = require('readline');
const showHelp = require('./help');
const { add, sub, mul, div,
    mod, pow, max, min,
    round, sqrt, abs, log, fact
} = require('../src/calculator');

const operations = {
    add, sub, mul, div,
    mod, pow, max, min,
    round, sqrt, abs, log, fact
};
const oneArgOps = [
    'round', 'sqrt', 'abs',
    'log', 'fact'
];
const twoArgOps = [
    'add', 'sub', 'mul',
    'div', 'mod', 'pow',
    'max', 'min'
];

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
        showHelp();
        rl.prompt();
        return;
    }
    const [operation, aStr, bStr] = line.split(' ');

    if (oneArgOps.includes(operation)) {
        const a = parseFloat(aStr);
        if (isNaN(a)) {
            console.error('Please provide one valid number.');
        } else {
            console.log(`Result: ${operations[operation](a)}`);
        }
    } else if (twoArgOps.includes(operation)) {
        const a = parseFloat(aStr);
        const b = parseFloat(bStr);
        if (isNaN(a) || isNaN(b)) {
            console.error('Please provide two valid numbers.');
        } else {
            console.log(`Result: ${operations[operation](a, b)}`);
        }
    } else {
        console.log(`Your input doesn't include any existing operation.
Type '--help' for more information.`)
    }
    rl.prompt();
}).on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
});