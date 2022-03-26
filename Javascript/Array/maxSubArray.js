//https://leetcode.com/problems/maximum-subarray/submissions/

var maxSubArray = function (nums) {
    let maxm = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        maxm = Math.max(maxm, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }
    return maxm;
};

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
