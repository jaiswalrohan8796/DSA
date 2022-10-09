//https://leetcode.com/problems/find-the-town-judge/submissions/

var findJudge = function (n, trust) {
    let deg = Array(n + 1).fill(0);
    for (let [i, j] of trust) {
        deg[i] -= 1;
        deg[j] += 1;
    }
    for (let i = 1; i <= n; i++) {
        if (deg[i] == n - 1) return i;
    }
    return -1;
};

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
