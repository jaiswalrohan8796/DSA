//https://leetcode.com/problems/powx-n/submissions/

var myPow = function (x, n) {
    let temp = n;
    if (n == 0) {
        return 1;
    }
    n = Math.abs(n);
    let result =
        n % 2 == 0 ? myPow(x * x, n / 2) : myPow(x * x, (n - 1) / 2) * x;
    if (temp < 0) {
        return 1 / result;
    }
    return result;
};

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
