//https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/submissions/

var countStudents = function (students, sandwiches) {
    let ones = 0;
    let zeros = 0;
    for (let stud of students) {
        if (stud == 0) {
            zeros++;
        } else {
            ones++;
        }
    }

    for (let sand of sandwiches) {
        if (sand == 0) {
            if (zeros == 0) {
                return ones;
            }
            zeros--;
        } else {
            if (ones == 0) {
                return zeros;
            }
            ones--;
        }
    }
    return 0;
};

// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.
