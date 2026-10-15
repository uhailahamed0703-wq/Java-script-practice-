const score = 55;
const attendance = 80;
const assignments = 90;

if (score >= 60 && attendance >= 75 && assignments >= 80) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");

    if (score < 60) {
        console.log("Reason: Score is below 60");
    }

    if (attendance < 75) {
        console.log("Reason: Attendance is below 75%");
    }

    if (assignments < 80) {
        console.log("Reason: Assignments completed are below 80%");
    }
}