const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input) {
    const number = Number(input);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " × " + i + " = " + (number * i));
    }

    rl.close();
});