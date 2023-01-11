//https://leetcode.com/problems/is-subsequence/

var isSubsequence = function(s, t) {
    if (s.length > t.length) return false
    let t_len = t.length
    let sub = 0
    for(let i = 0; i < t_len; i++) {
        if(s[sub] === t[i]) {
            sub += 1
        }
    }
    return sub === s.length
};
//order matters
// Input: s = "abc", t = "ahbgdc"
// Output: true
