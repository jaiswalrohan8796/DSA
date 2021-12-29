//https://leetcode.com/problems/is-subsequence/

//TLE
var isSubsequence = function (s, t) {
    t = t.split("");
    let temp = t.slice();
    for (let i = 0; i < temp.length; i++) {
        if (!s.includes(temp[i])) {
            let pos = t.indexOf(temp[i]);
            t.splice(pos, 1);
        }
    }
    t = t.join("");
    return t.includes(s);
};
//order matters
// Input: s = "abc", t = "ahbgdc"
// Output: true
