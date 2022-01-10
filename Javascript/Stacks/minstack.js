//https://leetcode.com/problems/min-stack/submissions/

var MinStack = function () {
    this.list = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.list.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.list.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    console.log(this.list);
    return this.list[this.list.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let minm = Math.min(...this.list);
    return minm;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  Input
//  ["MinStack","push","push","push","getMin","pop","top","getMin"]
//  [[],[-2],[0],[-3],[],[],[],[]]

//  Output
//  [null,null,null,null,-3,null,0,-2]
