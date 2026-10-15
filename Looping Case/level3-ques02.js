const height = 5;

console.log("Right Triangle:");

for (let i = 1; i <= height; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* ";
    }

    console.log(pattern);
}

console.log("Upside Down Triangle:");

for (let i = height; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* ";
    }

    console.log(pattern);
}