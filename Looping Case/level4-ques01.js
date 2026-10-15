const N = 20;
let isPrime = true;

if (N < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(N + " is a prime number");
} else {
    console.log(N + " is not a prime number");
}

console.log("Prime numbers from 1 to " + N + ":");

for (let number = 2; number <= N; number++) {
    let prime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(number);
    }
}