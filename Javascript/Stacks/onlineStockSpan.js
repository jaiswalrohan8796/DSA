// /https://leetcode.com/problems/online-stock-span/submissions/

var StockSpanner = function () {
    this.stock = [];
};

StockSpanner.prototype.next = function (price) {
    this.stock.push(price);
    let span = 0;
    let idx = this.stock.length - 1;
    for (let i = idx; i >= 0; i--) {
        if (price >= this.stock[i]) {
            span++;
        } else {
            break;
        }
    }
    return span;
};

// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]
