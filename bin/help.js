function showHelp() {
    console.log(`
CLI Calculator Help!
            
Usage:
    <operation> <num1> <num2>   For binary operations (add 2 3)
    <operation> <num>           For unary operations (sqrt 9)
            
Available Operations:

Basic (2 arguments):
    add    → Add two numbers           add 5 3     → 8
    sub    → Subtract two numbers      sub 10 5    → 5
    mul    → Multiply two numbers      mul 4 3     → 12
    div    → Divide two numbers        div 8 2     → 4

Extended (2 arguments):
    mod    → Modulus (remainder)       mod 10 4    → 2
    pow    → Power (a^b)               pow 2 5     → 32
    max    → Maximum of two numbers    max 4 9     → 9
    min    → Minimum of two numbers    min 7 3     → 3

Unary (1 argument):
    sqrt   → Square root              sqrt 25     → 5
    abs    → Absolute value           abs -9      → 9
    fact   → Factorial                fact 5      → 120
    log    → Natural logarithm        log 10      → 2.302
    round  → Round to nearest int     round 4.6   → 5

Other:
    help   → Show this help message
    exit   → Exit the calculator (or press Ctrl + C)

Note:
    - All inputs must be valid numbers.
    - Press Ctrl + C to quit this interface at any time.
    `);
}
module.exports = showHelp;