//https://leetcode.com/problems/running-sum-of-1d-array/submissions/

var runningSum = function (nums) {
    let ans = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        ans.push(ans[ans.length - 1] + nums[i]);
    }
    return ans;
};

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
