//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function (prices) {
    let L = 0;
    let R = 1;
    let maxP = 0;
    while (R <= prices.length) {
        if (prices[L] < prices[R]) {
            let profit = prices[R] - prices[L];
            maxP = Math.max(maxP, profit);
        } else {
            L = R;
        }
        R++;
    }
    return maxP;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
