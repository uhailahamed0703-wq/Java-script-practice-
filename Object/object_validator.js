
function validate(object, schema) {
    let errors = [];

    for (let property of Object.keys(schema)) {
        let rules = schema[property];
        let value = object[property];

        // Check required property
        if (rules.required && value === undefined) {
            errors.push({
                property: property,
                reason: "Property is required"
            });
            continue;
        }

        // Skip optional properties that are missing
        if (value === undefined) {
            continue;
        }

        // Check data type
        if (typeof value !== rules.type) {
            errors.push({
                property: property,
                reason: "Must be a " + rules.type
            });
            continue;
        }

        // Check minimum value
        if (rules.min !== undefined && value < rules.min) {
            errors.push({
                property: property,
                reason: "Must be at least " + rules.min
            });
        }
    }

    return errors;
}

// Define the schema
let schema = {
    name: { type: "string", required: true },
    age: { type: "number", required: true, min: 18 },
    marks: { type: "number", required: true, min: 50 }
};

// Object to validate
let student = {
    name: "Uhail",
    age: 16,
    marks: 35
};

// Validate and display errors
let errors = validate(student, schema);

console.log(errors);
