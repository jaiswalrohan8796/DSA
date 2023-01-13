//https://leetcode.com/problems/word-pattern/description/

//Use two maps to track mapping of char to word & word to char.

var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    if(pattern.length != arr.length) return false

    let w2c = new Map()
    let c2w = new Map()
    for(let i = 0; i < pattern.length; i++) {
        let char = pattern[i]
        let word = arr[i]
        if(!c2w.has(char)) {
            c2w.set(char, word)
        }
        if(!w2c.has(word)) {
            w2c.set(word, char)
        }
        if(c2w.get(char) != word || w2c.get(word) != char) {
            return false
        }
    }
    return true
};

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
