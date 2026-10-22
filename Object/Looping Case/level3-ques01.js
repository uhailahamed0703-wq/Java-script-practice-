const rows = 4;
const columns = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= columns; j++) {
        pattern = pattern + "* ";
    }

    console.log(pattern);
}