//https://leetcode.com/problems/find-the-difference/submissions/

var findTheDifference = function(s, t) {
    s = s.split('')
    t = t.split('')
    for(let char of s) {
        if(t.includes(char)) {
            let pos = t.indexOf(char)
            t.splice(pos,1)
        }
    }
    return t[0]
};

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.