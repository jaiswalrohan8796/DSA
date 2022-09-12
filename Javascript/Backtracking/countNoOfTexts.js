//https://leetcode.com/problems/count-number-of-texts/

//TLE

var countTexts = function (pressedKeys) {
    if (pressedKeys == null || pressedKeys.length == 0) return [];
    var res = [0];
    let step = [];
    let keymap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    dfs(0, step, pressedKeys, keymap, res);
    return res[0] % 1000000007;
};

function dfs(idx, step, digits, keymap, res) {
    if (idx > digits.length) return;
    if (idx == digits.length) {
        res[0]++;
        return;
    }
    let i = idx;
    do {
        let char = keymap[digits[idx]][i - idx];
        step.push(char);
        dfs(i + 1, step, digits, keymap, res);
        step.pop();
        i++;
    } while (i > idx && i < digits.length && digits[idx] == digits[i]);
}

//Recusion + backtrack
//logic is correct but, repeated calculations results in TLE.
//Use DP here.
