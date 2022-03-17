//https://leetcode.com/problems/counting-bits/submissions/

var countBits = function (n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2);
        ans.push(binary.split("1").length - 1);
    }
    return ans;
};

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
