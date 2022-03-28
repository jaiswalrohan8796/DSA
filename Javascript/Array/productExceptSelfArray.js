//https://leetcode.com/problems/product-of-array-except-self/submissions/

var productExceptSelf = function (nums) {
    let left = 1;
    let right = 1;
    let ans = new Array(nums.length).fill(1); //ans = [1,1,1,1]
    for (let i = 0; i < nums.length; i++) {
        // calc left sum of product
        ans[i] = ans[i] * left;
        left = left * nums[i];
    }
    //ans = [1,1,2,6]
    for (let i = nums.length - 1; i >= 0; i--) {
        // calc right sum of product
        ans[i] = ans[i] * right;
        right = right * nums[i];
    }
    //ans = [1,1,2,6] * [24,12,4,1]
    return ans;
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
