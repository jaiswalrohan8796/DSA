//https://leetcode.com/problems/split-array-largest-sum/submissions/

var splitArray = function (nums, m) {
    function canSplit(nums, maxSum, m) {
        let totalParts = 0;
        let currSum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (currSum + nums[i] <= maxSum) {
                currSum += nums[i];
            } else {
                currSum = nums[i];
                totalParts += 1;
            }
        }
        return totalParts + 1 <= m;
    }

    let low = 0;
    let high = 0;
    for (let i = 0; i < nums.length; i++) {
        high += nums[i];
        low = Math.max(low, nums[i]);
    }
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (canSplit(nums, mid, m)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

// Input: nums = [7,2,5,10,8], m = 2
// Output: 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18
