//https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/submissions/

var minOperations = function (nums) {
    if (nums.length <= 1) {
        return 0;
    }
    let c = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            c += nums[i] - nums[i + 1] + 1;
            nums[i + 1] += nums[i] - nums[i + 1] + 1;
        }
    }
    return c;
};

// Input: nums = [1,1,1]
// Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].
