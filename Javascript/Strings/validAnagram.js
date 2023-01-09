//https://leetcode.com/problems/valid-anagram

var isAnagram = function(s, t) {
    let letters = new Array(27).fill(0)
    for(let str of s) {
        let charIndex = str.charCodeAt(0) - 97
        letters[charIndex] += 1
    }
    for(let str of t) {
        let charIndex = str.charCodeAt(0) - 97
        letters[charIndex] -= 1
    }
    for(let num of letters) {
        if(num != 0) return false
    }
    return true
};


//Intuition
//Use letter frequency in an array block from 0 - 26
//Increse freq at one string char & decrease att other string char.
//finally if non zero found, not anagram.
