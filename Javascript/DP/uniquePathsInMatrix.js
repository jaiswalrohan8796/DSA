//https://leetcode.com/problems/unique-paths/submissions/

var uniquePaths = function(m, n) {
    function traverse(m,n,dp={}) {
        let char = `${m}-${n}`
        if(char in dp) return dp[char]
        if(m == 0 || n == 0) {
            return 0
        }
        if(m == 1 && n == 1) {
            return 1
        }
        dp[char] = traverse(m-1,n,dp) + traverse(m,n-1,dp)
        return dp[char]
    }
    return traverse(m,n)
};

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
