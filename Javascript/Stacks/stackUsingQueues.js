//https://leetcode.com/problems/implement-stack-using-queues/submissions/

var MyStack = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.stack.length == 0;
};

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
