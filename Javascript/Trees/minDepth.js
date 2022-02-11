//https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/

var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (root.left == null) {
        return minDepth(root.right) + 1;
    }
    if (root.right == null) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
