//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/

var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let maxP = 0;
    while (sell <= prices.length) {
        if (prices[sell] > prices[buy]) {
            while (prices[sell + 1] > prices[sell]) {
                sell++;
            }
            let profit = prices[sell] - prices[buy];
            maxP += profit;
        }
        buy = sell;
        sell++;
    }
    return maxP;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
