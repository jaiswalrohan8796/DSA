//https://leetcode.com/problems/next-greater-element-ii/description/

//Similar to general NGE, but here array is imaginarily circular.

var nextGreaterElements = function (nums) {
    let n = nums.length;
    let res = new Array(n);
    let stack = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i % n]) {
            stack.pop();
        }
        if (i < n) {
            if (stack.length > 0) {
                res[i] = stack[stack.length - 1];
            } else {
                res[i] = -1;
            }
        }
        stack.push(nums[i % n]);
    }
    console.log(res);
    return res;
};
