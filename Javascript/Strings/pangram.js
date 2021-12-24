//https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/

var checkIfPangram = function (sentence) {
    let chars = [];
    for (let char of sentence) {
        if (!chars.includes(char.toLowerCase())) {
            chars.push(char.toLowerCase());
        }
    }
    if (chars.length == 26) return true;
    return false;
};

/*Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet. */
