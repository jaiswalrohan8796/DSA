//https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/submissions/

var finalPrices = function (prices) {
    let final = [];
    for (let i = 0; i < prices.length; i++) {
        let discount = prices[i];
        let j = i + 1;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[i] - prices[j];
                break;
            }
        }
        final.push(discount);
    }
    return final;
};

// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.
