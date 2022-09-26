//https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/submissions/

var buildTree = function (inorder, postorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null;
        let root = new TreeNode(postorder[p2]);
        let index = map.get(root.val);
        let n_left = index - i1;
        root.left = helper(p1, p1 + n_left - 1, i1, index - 1);
        root.right = helper(p1 + n_left, p2 - 1, index + 1, i2);
        return root;
    }
    return helper(0, postorder.length - 1, 0, inorder.length - 1);
};
