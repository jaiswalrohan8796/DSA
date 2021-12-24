//https://leetcode.com/problems/reverse-prefix-of-word/submissions/

var reversePrefix = function (word, ch) {
    let temp = word.indexOf(ch);
    if (temp == -1) return word;
    else {
        let left = word.slice(0, temp + 1);
        let right = word.slice(temp + 1, word.length);
        left = left.split("").reverse().join("");
        return left + right;
    }
};

/*
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd". */
