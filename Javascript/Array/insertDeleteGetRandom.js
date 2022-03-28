//https://leetcode.com/problems/insert-delete-getrandom-o1/submissions/

var RandomizedSet = function () {
    this.set = new Set();
    this.len = this.set.size;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    let oldsize = this.set.size;
    let newset = this.set.add(val);
    if (oldsize == newset.size) {
        return false;
    }
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    return this.set.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let randomIndx = Math.floor(Math.random() * this.set.size);
    return [...this.set][randomIndx];
};

// Input[
//     ("RandomizedSet",
//     "insert",
//     "remove",
//     "insert",
//     "getRandom",
//     "remove",
//     "insert",
//     "getRandom")
// ][([], [1], [2], [2], [], [1], [2], [])];
// Output[(null, true, false, true, 2, true, false, 2)];
