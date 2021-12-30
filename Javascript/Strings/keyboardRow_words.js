//https://leetcode.com/problems/keyboard-row/submissions/

var findWords = function (words) {
    let firstRow = "qwertyuiop".split("");
    let secondRow = "asdfghjkl".split("");
    let thirdRow = "zxcvbnm".split("");

    let ans = [];
    for (let word of words) {
        let firstflag = true;
        for (let i = 0; i < word.length; i++) {
            if (!firstRow.includes(word[i].toLowerCase())) {
                firstflag = false;
            }
        }
        let secflag = true;
        for (let i = 0; i < word.length; i++) {
            if (!secondRow.includes(word[i].toLowerCase())) {
                secflag = false;
            }
        }
        let thirdflag = true;
        for (let i = 0; i < word.length; i++) {
            if (!thirdRow.includes(word[i].toLowerCase())) {
                thirdflag = false;
            }
        }
        if (firstflag || secflag || thirdflag) {
            ans.push(word);
        }
    }
    return ans;
};

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
