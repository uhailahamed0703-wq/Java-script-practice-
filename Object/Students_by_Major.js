
let students = [
    { name: "Uhail", major: "Informatics" },
    { name: "Afran", major: "Civil" },
    { name: "Nizar", major: "Informatics" },
    { name: "Kamal", major: "Civil" },
    { name: "David", major: "Business" }
];

function groupByMajor(students) {
    let groups = {};

    for (let i = 0; i < students.length; i++) {
        let major = students[i].major;

        if (groups[major] === undefined) {
            groups[major] = [];
        }

        groups[major].push(students[i]);
    }

    return groups;
}

console.log(groupByMajor(students));
