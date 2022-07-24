///https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1?page=1&difficulty[]=0&category[]=Dynamic%20Programming&sortBy=submissions

function countPairs(n) {
    let dp = [];

    // Filling dp[] in bottom-up manner using
    // recursive formula explained above.
    for (let i = 0; i <= n; i++) {
        if (i <= 2) dp[i] = i;
        else dp[i] = (dp[i - 1] + (i - 1) * dp[i - 2]) % 1000000007;
    }

    return dp[n];
}
