//https://leetcode.com/problems/backspace-string-compare/submissions/

var backspaceCompare = function (s, t) {
    let s_lst = [];
    let t_lst = [];
    for (let char of s) {
        if (char != "#") {
            s_lst.push(char);
        } else {
            s_lst.pop();
        }
    }
    for (let char of t) {
        if (char != "#") {
            t_lst.push(char);
        } else {
            t_lst.pop();
        }
    }
    console.log(s_lst, t_lst);
    let flag = true;
    for (let i = 0; i < s_lst.length; i++) {
        if (s_lst[i] != t_lst[i]) {
            flag = false;
        }
    }
    if (flag && s_lst.length == t_lst.length) {
        return true;
    }
    return false;
};

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
