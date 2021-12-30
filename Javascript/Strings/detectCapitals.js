k; //https://leetcode.com/problems/detect-capital/submissions/

var detectCapitalUse = function (word) {
    let firstCase = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() != word[i]) {
            firstCase = false;
        }
    }
    let secCase = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() != word[i]) {
            secCase = false;
        }
    }
    let thirdCase = true;
    for (let i = 0; i < word.length; i++) {
        if (i == 0) {
            if (word[i].toUpperCase() != word[i]) {
                thirdCase = false;
            }
        } else {
            if (word[i].toLowerCase() != word[i]) {
                thirdCase = false;
            }
        }
    }
    console.log(firstCase, secCase, thirdCase);
    if (firstCase || secCase || thirdCase) {
        return true;
    }
    return false;
};

// Example 1:

// Input: word = "USA"
// Output: true

// Example 2:

// Input: word = "FlaG"
// Output: false
