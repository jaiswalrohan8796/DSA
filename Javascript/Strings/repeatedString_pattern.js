//https://leetcode.com/problems/repeated-substring-pattern/submissions/

var repeatedSubstringPattern = function(s) {
    let str = s + s
    str = str.slice(1,str.length - 1)
    return str.includes(s)
};


// the string has repeated pattern if [twice the string - (first & last characters)] includes the original string

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.