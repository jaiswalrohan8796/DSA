//https://leetcode.com/problems/continuous-subarray-sum/submissions/

var checkSubarraySum = function (nums, k) {
    let sum = 0;

    let prefix = 0;

    const hash = new Set();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (k != 0) sum %= k;

        if (hash.has(sum)) return true;

        hash.add(prefix);
        prefix = sum;
    }
    return false;
};

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

//Intuition
//PrefixSum
