//https://leetcode.com/problems/range-sum-of-bst/submissions/

var rangeSumBST = function (root, low, high) {
    let summ = 0;
    function preorder(root) {
        if (root == null) {
            return;
        }
        if (root.left) {
            preorder(root.left);
        }
        let node = root.val;
        if (low <= node && node <= high) {
            summ += node;
        }
        if (root.right) {
            preorder(root.right);
        }
    }
    preorder(root);
    return summ;
};

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
