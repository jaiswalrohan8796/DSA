//https://leetcode.com/problems/di-string-match/submissions/

var diStringMatch = function(s) {
    str_length = s.length
    let intRange = [...Array(str_length + 1).keys()]
    let ans = []
    for(let char of s) {
        if(char == 'I') {
            let temp = intRange.shift()
            ans.push(temp)
        }
        else if (char == 'D') {
            let temp = intRange.pop()
            ans.push(temp)
        }
    }
    ans.push(intRange.pop())
    return ans
};

// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]