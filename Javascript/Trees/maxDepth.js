//https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/

var maxDepth = function (root) {
    if (root === undefined || root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

