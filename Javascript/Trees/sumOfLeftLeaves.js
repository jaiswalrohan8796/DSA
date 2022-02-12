//https://leetcode.com/problems/sum-of-left-leaves/submissions/

var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0;
    }
    let value = 0;
    if (
        root.left != null &&
        root.left.left == null &&
        root.left.right == null
    ) {
        value = root.left.val;
    }
    return value + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
