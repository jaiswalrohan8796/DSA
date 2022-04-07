//https://leetcode.com/problems/decode-string/submissions/

var decodeString = function (s) {
    let stack = [];
    let nums = {};
    for (let i = 0; i <= 9; i++) {
        nums[i] = true;
    }
    for (let char of s) {
        if (char != "]") {
            stack.push(char);
        } else {
            let str = "";
            while (stack[stack.length - 1] != "[") {
                str = stack.pop() + str;
            }
            stack.pop();
            let k = "";
            while (stack.length != 0 && stack[stack.length - 1] in nums) {
                k = stack.pop() + k;
            }
            stack.push(str.repeat(Number(k)));
        }
    }
    return stack.join("");
};

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
