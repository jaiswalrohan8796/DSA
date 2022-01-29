//https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/

var countConsistentStrings = function(allowed, words) {
    let allowed_letters = allowed.split('')
    let count = 0
    words.forEach((word) => {
        letters = word.split('')
        let flag = true
        letters.forEach((letter) => {
            if (!allowed_letters.includes(letter)) {
                flag = false
            }
        })
        if (flag) {
            count++
        }
    })
    return count
};

/* Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'

*/