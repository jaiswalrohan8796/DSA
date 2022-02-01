//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function (prices) {
    let min_price = Number.MAX_VALUE;
    let max_profit = 0;
    for (let price of prices) {
        min_price = Math.min(min_price, price);
        profit = price - min_price;
        max_profit = Math.max(max_profit, profit);
    }
    return max_profit;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
