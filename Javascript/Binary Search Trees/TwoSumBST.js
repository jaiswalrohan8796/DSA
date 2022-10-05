//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/submissions/

class BSTIterator {
    constructor(root, rev = false) {
        this.stack = [];
        this.rev = rev;
        this.insert(root);
    }
    insert(node) {
        while (node) {
            this.stack.push(node);
            if (!this.rev) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
    }
    hasNext() {
        return this.stack.length != 0;
    }
    next() {
        let popped = this.stack.pop();
        if (!this.rev) {
            this.insert(popped.right);
        } else {
            this.insert(popped.left);
        }
        return popped.val;
    }
}

var findTarget = function (root, k) {
    let start = new BSTIterator(root);
    let end = new BSTIterator(root, true);
    let i = start.next();
    let j = end.next();
    while (i < j) {
        if (i + j == k) return true;
        if (i + j < k) {
            i = start.next();
        } else if (i + j > k) {
            j = end.next();
        }
    }
    return false;
};

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
