//https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/submissions/

var getSmallestString = function (n, k) {
    let str = "";
    for (let i = n; i > 0; i--) {
        let val = k - (i - 1);
        if (val >= 26) {
            str = String.fromCharCode(96 + 26) + str;
            k = k - 26;
        } else {
            str = String.fromCharCode(96 + val) + str;
            k = k - val;
        }
    }
    return str;
};

// Input: n = 3, k = 27
// Output: "aay"
// Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
