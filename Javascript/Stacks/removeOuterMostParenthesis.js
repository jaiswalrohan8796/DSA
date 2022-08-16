//https://leetcode.com/problems/remove-outermost-parentheses/submissions/

var removeOuterParentheses = function (s) {
    let ans = "";
    let curr = "";
    let stack = [];
    for (let char of s) {
        if (char == "(") {
            stack.push(char);
            curr += char;
        } else if (char == ")") {
            curr += char;
            stack.pop();
            if (stack.length == 0) {
                curr = curr.slice(1, curr.length - 1);
                ans += curr;
                // console.log(open)
                curr = "";
            }
        }
    }
    return ans;
};

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
