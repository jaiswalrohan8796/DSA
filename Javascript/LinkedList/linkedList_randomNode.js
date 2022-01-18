//https://leetcode.com/problems/linked-list-random-node/submissions/

var Solution = function (head) {
    this.listhead = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let arry = [];
    let curr = this.listhead;
    while (curr) {
        arry.push(curr.val);
        curr = curr.next;
    }
    let len = arry.length;
    let random = Math.floor(Math.random() * len);
    return arry[random];
};

// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // return 1
// solution.getRandom(); // return 3
// solution.getRandom(); // return 2
// solution.getRandom(); // return 2
// solution.getRandom(); // return 3
// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.