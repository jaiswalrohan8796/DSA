//https://leetcode.com/problems/kth-largest-element-in-a-stream/submissions/

var KthLargest = function (k, nums) {
    this.arry = nums;
    this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.arry.push(val);
    this.arry.sort((a, b) => {
        return b - a;
    });
    return this.arry[this.k - 1];
};

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]
