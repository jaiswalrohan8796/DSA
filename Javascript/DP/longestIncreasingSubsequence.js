//https://leetcode.com/problems/longest-increasing-subsequence/submissions/

var lengthOfLIS = function (nums) {
    let n = nums.length;
    let ans = 1;
    let dp = new Array(n).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                ans = Math.max(ans, dp[i]);
            }
        }
    }
    return ans;
};

//Better Approach is Binary Search O(NlogN) : Come back later to understand

// Input: nums = [0,1,0,3,2,3]
// Output: 4
