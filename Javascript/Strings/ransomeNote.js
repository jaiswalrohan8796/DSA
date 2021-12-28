//https://leetcode.com/problems/ransom-note/submissions/

var canConstruct = function(ransomNote, magazine) {
    let mag = magazine.split('')
    let ran = ransomNote.split('')
    for(let char of ran) {
        if(mag.includes(char)) {
            let pos = mag.indexOf(char)
            mag.splice(pos,1)
        }
        else {
            return false
        }
    }
    return true
    
};

// Input: ransomNote = "aa", magazine = "aab"
// Output: true