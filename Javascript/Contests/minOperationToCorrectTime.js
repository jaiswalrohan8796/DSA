//https://leetcode.com/contest/weekly-contest-287/problems/minimum-number-of-operations-to-convert-time/

var convertTime = function (current, correct) {
    let [currHour, currMin] = current.split(":");
    let [corrHour, corrMin] = correct.split(":");
    let a = Number(corrHour) * 60 - Number(currHour) * 60;
    let b = Number(corrMin) - Number(currMin);
    console.log(a, b);
    let stepA = 0;
    let stepB = 0;
    if (b < 0) {
        a -= 60;
        b += 60;
    }
    console.log(a, b);
    while (a > 0) {
        a -= 60;
        stepA++;
    }
    while (b > 0) {
        if (b >= 15) {
            b -= 15;
            stepB++;
        } else if (b >= 5) {
            b -= 5;
            stepB++;
        } else if (b >= 1) {
            b -= 1;
            stepB++;
        }
    }
    return stepA + stepB;
};


// Difficulty:Easy
// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

// Input: current = "02:30", correct = "04:35"
// Output: 3
// Explanation:
// We can convert current to correct in 3 operations as follows:
// - Add 60 minutes to current. current becomes "03:30".
// - Add 60 minutes to current. current becomes "04:30".
// - Add 5 minutes to current. current becomes "04:35".
// It can be proven that it is not possible to convert current to correct in fewer than 3 operations.