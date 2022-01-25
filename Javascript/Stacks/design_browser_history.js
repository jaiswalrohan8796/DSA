//https://leetcode.com/problems/design-browser-history/submissions/

var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.curr = 1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this.curr != this.history.length) {
        this.history = this.history.slice(0, this.curr);
    }
    this.curr++;
    this.history.push(url);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (this.curr - steps - 1 < 0) {
        this.curr = 1;
    } else {
        this.curr = this.curr - steps;
    }
    return this.history[this.curr - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if (this.curr + steps > this.history.length) {
        this.curr = this.history.length;
    } else {
        this.curr = this.curr + steps;
    }
    return this.history[this.curr - 1];
};


// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]