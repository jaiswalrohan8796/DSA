//https://leetcode.com/problems/generate-parentheses/submissions/

var generateParenthesis = function (n) {
    function backtrack(open, close) {
        if (stack.length == n * 2) {
            res.push([...stack].join(""));
            return;
        }
        if (open < n) {
            stack.push("(");
            backtrack(open + 1, close);
            stack.pop();
        }
        if (close < open) {
            stack.push(")");
            backtrack(open, close + 1);
            stack.pop();
        }
    }
    let stack = [];
    let res = [];
    backtrack(0, 0);
    return res;
};

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
