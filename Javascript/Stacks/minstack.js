//https://leetcode.com/problems/min-stack/submissions/

var MinStack = function () {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.min.length > 0) {
        val = Math.min(val, this.min.at(-1));
        this.min.push(val);
    } else {
        this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min.at(-1);
};

//  Input
//  ["MinStack","push","push","push","getMin","pop","top","getMin"]
//  [[],[-2],[0],[-3],[],[],[],[]]

//  Output
//  [null,null,null,null,-3,null,0,-2]

//Intuition
//For every node keep track of the minimum element.
//Use stack to keep min element for every level in main stack
//If popped from main, also pop from min stack
