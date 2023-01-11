//https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function(s) {
    let n = s.length
    let idx = n - 1
    while(s[idx] == " ") {
        idx -= 1
    }
    let ans = 0
    while( idx >= 0 && s[idx] != " ") {
        idx -= 1
        ans += 1
    }
    return ans
};
