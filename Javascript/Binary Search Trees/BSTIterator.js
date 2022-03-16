//https://leetcode.com/problems/binary-search-tree-iterator/submissions/

var BSTIterator = function (root) {
    let lst = [];
    function preorder(root, nums) {
        if (root == null) {
            return;
        }
        if (root.left) {
            preorder(root.left, nums);
        }
        nums.push(root.val);
        if (root.right) {
            preorder(root.right, nums);
        }
    }
    preorder(root, lst);
    this.arry = [...lst];
};

BSTIterator.prototype.next = function () {
    let pop = this.arry.shift();
    return pop;
};

BSTIterator.prototype.hasNext = function () {
    if (this.arry.length == 0) {
        return false;
    }
    return true;
};

// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False
