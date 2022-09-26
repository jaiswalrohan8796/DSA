//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/

var buildTree = function (preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null;
        let root = new TreeNode(preorder[p1]);
        let index = map.get(root.val);
        let n_left = index - i1;
        root.left = helper(p1 + 1, p1 + n_left, i1, index - 1);
        root.right = helper(p1 + n_left + 1, p2, index + 1, i2);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
