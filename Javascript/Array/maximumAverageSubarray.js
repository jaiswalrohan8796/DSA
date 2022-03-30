//https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function (nums, k) {
    let maxmA = Number.MIN_SAFE_INTEGER;
    let curr = 0;
    let start = 0;
    let end = 0;
    for (end = 0; end < k; end++) {
        curr += nums[end];
    }

    while (end < nums.length && start < nums.length) {
        maxmA = Math.max(maxmA, curr / k);
        curr = curr - nums[start];
        start++;
        curr = curr + nums[end];
        end++;
    }
    maxmA = Math.max(maxmA, curr / k);
    return maxmA;
};

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

//Intuition
//Use Sliding Window technique
//Calc the curr Sum of first k
// The while end is not nums end, calc avg & find maximum
//remove the start nums[start] & add nums[end]
//Atlast also calc avg find maximum & return
