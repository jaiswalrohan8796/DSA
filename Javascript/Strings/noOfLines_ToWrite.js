//https://leetcode.com/problems/number-of-lines-to-write-string/submissions/

var numberOfLines = function (widths, s) {
    let row = 1;
    let w = 0;
    for (let i = 0; i < s.length; i++) {
        let p = Number(s[i].charCodeAt(0)) - 97;
        if (w + widths[p] <= 100) {
            w += widths[p];
        } else {
            row++;
            w = 0;
            w += widths[p];
        }
    }
    return [row, w];
};

// Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
// Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.