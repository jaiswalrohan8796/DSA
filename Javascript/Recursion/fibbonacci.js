//https://leetcode.com/problems/fibonacci-number/submissions/

var fib = function (n) {
    function calculateFib(n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        return calculateFib(n - 1) + calculateFib(n - 2);
    }
    return calculateFib(n);
};


// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.