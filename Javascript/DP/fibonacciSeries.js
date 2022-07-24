//Dynamic Programming

function fibonacci(n) {
    function fib(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n];
    }
    return fib(n);
}

console.log(fibonacci(100));
