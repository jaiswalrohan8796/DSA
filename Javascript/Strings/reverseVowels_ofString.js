//https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/

var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u']
    let vw = []
    for(let c of s) {
        if(vowels.includes(c)) {
            vw.push(c)
        }
    }
    vw = vw.reverse()
    let ans = ""
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            ans += vw.splice(0,1)[0]
        }
        else {
            ans += s[i]
        }
    }
    return ans
};

// Input: s = "hello"
// Output: "holle"