//https://leetcode.com/problems/student-attendance-record-i/submissions/

var checkRecord = function (s) {
    let student = s.split("");
    let obj = {};
    for (let act of student) {
        obj[act] = obj[act] ? obj[act] + 1 : 1;
    }
    console.log(obj);
    if (s.includes("LLL")) {
        return false;
    } else {
        if (obj["A"] >= 2) {
            return false;
        }
        return true;
    }
};

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
