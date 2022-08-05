//https://leetcode.com/problems/combination-sum-iv/submissions/

var combinationSum4 = function (N, T) {
    let dp = new Uint32Array(T + 1);
    dp[0] = 1;
    for (let i = 1; i <= T; i++)
        for (let num of N) if (num <= i) dp[i] += dp[i - num];
    return dp[T];
};

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
