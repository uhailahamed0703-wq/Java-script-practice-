const hours = 5;
let fee;

if (hours <= 0) {
    fee = 0;
} else {
    fee = 5000 + (hours - 1) * 3000;

    if (fee > 20000) {
        fee = 20000;
    }
}

console.log("Parking Hours: " + hours);
console.log("Parking Fee: Rp" + fee);