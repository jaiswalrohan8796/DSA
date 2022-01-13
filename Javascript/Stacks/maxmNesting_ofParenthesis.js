//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/submissions/

var maxDepth = function (s) {
    let curr = 0;
    let ans = 0;
    for (let char of s) {
        if (char == "(") {
            curr += 1;
            ans = Math.max(curr, ans);
        } else if (char == ")") {
            curr -= 1;
        }
    }
    return ans;
};

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.