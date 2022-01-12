//https://leetcode.com/problems/make-the-string-great/

var makeGood = function (s) {
    let ans = [];
    for (let char of s) {
        if (ans.length == 0) {
            ans.push(char);
        } else if (char == ans[ans.length - 1].toUpperCase()) {
            ans.pop();
        } else {
            ans.push(char);
        }
    }
    return ans.join("");
};


//WRONG ANSWER => else if () logic needs improvement

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""