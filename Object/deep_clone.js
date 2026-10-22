
function deepClone(value) {
    // If value is primitive or null, return it
    if (value === null || typeof value !== "object") {
        return value;
    }

    // If value is an array, copy each item
    if (Array.isArray(value)) {
        let result = [];

        for (let i = 0; i < value.length; i++) {
            result.push(deepClone(value[i]));
        }

        return result;
    }

    // If value is an object, copy each property
    let result = {};

    for (let key of Object.keys(value)) {
        result[key] = deepClone(value[key]);
    }

    return result;
}

// Original object
let student = {
    name: "Uhail",
    address: {
        city: "Kinniya",
        country: "Sri Lanka"
    },
    marks: [80, 90, 95]
};

// Create a deep clone
let copy = deepClone(student);

// Modify the clone
copy.address.city = "Jakarta";
copy.marks[0] = 50;

// Display both objects
console.log("Original:", student);
console.log("Clone:", copy);
