//https://leetcode.com/problems/valid-parentheses/submissions/

var isValid = function (s) {
    let dict = { ")": "(", "}": "{", "]": "[" };
    let starts = "({[";
    let arr = [];
    for (let i of s) {
        if (starts.includes(i)) {
            arr.push(i);
        } else {
            if (arr.length != 0 && arr[arr.length - 1] == dict[i]) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length == 0;
};

// Input: s = "()[]{}"
// Output: true
