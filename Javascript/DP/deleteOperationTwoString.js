//https://leetcode.com/problems/delete-operation-for-two-strings/

var minDistance = function(W1, W2) {
    let m = W1.length, n = W2.length
    if (m < n) [W1, W2, m, n] = [W2, W1, n, m]
    let WA1 = W1.split(""), WA2 = W2.split(""),
        dpLast = new Uint16Array(n + 1),
        dpCurr = new Uint16Array(n + 1)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) 
            dpCurr[j+1] = WA1[i] === WA2[j]
                ? dpLast[j] + 1
                : Math.max(dpCurr[j], dpLast[j+1]);
        [dpLast, dpCurr] = [dpCurr, dpLast]
    }
    return m + n - 2 * dpLast[n] 
};



// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
