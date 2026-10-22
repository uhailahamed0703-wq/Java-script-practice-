const number = 12321;

let temp = number;
let digitCount = 0;
let digitSum = 0;
let reverse = 0;

while (temp > 0) {
    let digit = temp % 10;

    digitCount++;
    digitSum = digitSum + digit;
    reverse = reverse * 10 + digit;

    temp = Math.floor(temp / 10);
}

console.log("Original Number: " + number);
console.log("Number of Digits: " + digitCount);
console.log("Sum of Digits: " + digitSum);
console.log("Reversed Number: " + reverse);

if (number === reverse) {
    console.log("Palindrome: Yes");
} else {
    console.log("Palindrome: No");
}