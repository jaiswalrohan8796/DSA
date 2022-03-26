//https://leetcode.com/problems/fibonacci-number/submissions/

var fib = function (n) {
    function calculateFib(n) {
        if (n <= 1) {
            return n;
        }
        return calculateFib(n - 1) + calculateFib(n - 2);
    }
    return calculateFib(n);
};
