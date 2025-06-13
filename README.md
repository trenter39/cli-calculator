# 🧮 CLI calculator

a powerful CLI calculator built with Node.js that supports basic and advanced mathematical operations.

designed to demonstrate modular code structure, unit testing with Mocha, and CI/CD integration using GitHub Actions (for university purposes).

## 📦 Installation
```
git clone https://github.com/trenter39/cli-calculator.git
cd cli-calculator
npm install
```

## 🚀 Start calculator
```
npm start
node bin/cli.js # relative path
```

## 📚 Help
*can be viewed with `help` command*

### Usage

| Format                      | Example            |
| --------------------------- | ------------------ |
| `<operation> <num1> <num2>` | `add 2 3` (binary) |
| `<operation> <num>`         | `sqrt 9` (unary)   |


### Basic Operations (2 arguments)

| Command | Description          | Example    | Output |
| ------- | -------------------- | ---------- | ------ |
| `add`   | Add two numbers      | `add 5 3`  | `8`    |
| `sub`   | Subtract two numbers | `sub 10 5` | `5`    |
| `mul`   | Multiply two numbers | `mul 4 3`  | `12`   |
| `div`   | Divide two numbers   | `div 8 2`  | `4`    |


### Extended Operations (2 arguments)

| Command | Description            | Example    | Output |
| ------- | ---------------------- | ---------- | ------ |
| `mod`   | Modulus (remainder)    | `mod 10 4` | `2`    |
| `pow`   | Power (a^b)            | `pow 2 5`  | `32`   |
| `max`   | Maximum of two numbers | `max 4 9`  | `9`    |
| `min`   | Minimum of two numbers | `min 7 3`  | `3`    |


### Unary Operations (1 argument)

| Command | Description                | Example     | Output  |
| ------- | -------------------------- | ----------- | ------- |
| `sqrt`  | Square root                | `sqrt 25`   | `5`     |
| `abs`   | Absolute value             | `abs -9`    | `9`     |
| `fact`  | Factorial                  | `fact 5`    | `120`   |
| `log`   | Natural logarithm (base e) | `log 10`    | `2.302` |
| `round` | Round to nearest integer   | `round 4.6` | `5`     |


### Other Commands

| Command | Description                      |
| ------- | -------------------------------- |
| `help`  | Show help message                |
| `exit`  | Exit the calculator (`Ctrl + C`) |


### Notes

* All inputs must be **valid numbers**
* Press **Ctrl + C** to quit the interface at any time

![calculator-preview](https://github.com/trenter39/cli-calculator/blob/master/imgs/preview.png)