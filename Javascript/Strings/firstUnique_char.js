//https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

var firstUniqChar = function(s) {
    s= s.split('')
    let obj = {}
    for(let i = 0; i< s.length; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
    }
    for(let [k,v] of Object.entries(obj)) {
        if (v == 1) {
            return s.indexOf(k)
        }
    }
    return -1
};

// Input: s = "loveleetcode"
// Output: 2