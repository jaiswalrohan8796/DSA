//https://leetcode.com/problems/binary-tree-pruning/submissions/

var pruneTree = function (root) {
    if (!root) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (root.left == null && root.right == null && root.val == 0) return null;
    return root;
};
