const scores = [80, 65, 90, 75, 50, 85, 70, 95, 60, 88];

let total = 0;
let passed = 0;
let failed = 0;
let highest = scores[0];
let lowest = scores[0];

for (let i = 0; i < 10; i++) {
    total = total + scores[i];

    if (scores[i] >= 75) {
        passed++;
    } else {
        failed++;
    }

    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

const average = total / 10;

console.log("Average Score: " + average);
console.log("Passed Students: " + passed);
console.log("Failed Students: " + failed);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);