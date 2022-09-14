//https://leetcode.com/problems/palindrome-partitioning/submissions/


var partition = function (s) {
    if (!s || s.length == 0) return [];
    let res = [];
    backtrack(0, [], s, res);
    return res;
};

function backtrack(idx, step, s, res) {
    if (idx == s.length) {
        res.push([...step]);
        return;
    }
    for (let i = idx; i < s.length; i++) {
        if (isPalindrome(idx, i, s)) {
            let pd = s.substring(idx, i + 1);
            step.push(pd);
            backtrack(i + 1, step, s, res);
            step.pop();
        }
    }
}

function isPalindrome(start, end, s) {
    while (start <= end) {
        if (s[start] != s[end]) return false;
        start++;
        end--;
    }
    return true;
}
