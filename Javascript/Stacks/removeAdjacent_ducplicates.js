//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/submissions/

var removeDuplicates = function (s) {
    let ans = [s[0]];
    for (let i = 1; i < s.length; i++) {
        let temp = ans[ans.length - 1];
        if (s[i] != temp) {
            ans.push(s[i]);
        }
        if (s[i] == temp) {
            ans.pop();
        }
    }
    return ans.join("");
};

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
