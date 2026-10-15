const secretNumber = 37;
const guesses = [20, 50, 30, 40, 37];

let attempts = 0;
let i = 0;

while (attempts < 7) {
    const guess = guesses[i];
    attempts++;

    console.log("Guess: " + guess);

    if (guess === secretNumber) {
        console.log("Correct! You guessed the number.");
        console.log("Attempts: " + attempts);
        break;
    } else if (guess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }

    i++;

    if (i === guesses.length) {
        break;
    }
}

if (guesses[i - 1] !== secretNumber && attempts < 7) {
    console.log("Game ended. Try again!");
} else if (guesses[i - 1] !== secretNumber && attempts === 7) {
    console.log("Game over! Maximum attempts reached.");
}