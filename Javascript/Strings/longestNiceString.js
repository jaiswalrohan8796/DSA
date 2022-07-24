//https://leetcode.com/problems/longest-nice-substring/submissions/



var longestNiceSubstring = function(s) {
    let nice = ""
    for(let i = 0; i < s.length; i++) {
        let currNice = ""
        for(let j = i; j < s.length; j++) {
            currNice += s[j]
            if(isNice(currNice)) {
                if(currNice.length > nice.length) {
                    nice = currNice
                }
            }
        }
    }
    return nice
    function isNice(string) {
        for(let char of string) {
            if(string.includes(char.toUpperCase()) && string.includes(char.toLowerCase())) {
                continue
            }
            else {
                return false
            }
        }
        return true
    }
}

// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.
