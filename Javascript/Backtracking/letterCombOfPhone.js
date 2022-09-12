//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
    const L = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    const ans = [];
    if (digits.length == 0) return [];
    function dfs(idx, str) {
        if (idx == digits.length) {
            ans.push(str);
            return;
        }
        let letters = L[digits[idx]];
        for (let i = 0; i < letters.length; i++) {
            dfs(idx + 1, str + letters[i]);
        }
    }

    dfs(0, "");
    return ans;
};
