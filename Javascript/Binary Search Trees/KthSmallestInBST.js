//https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/

var kthSmallest = function (root, k) {
    let arry = [];
    function preorder(root) {
        if (root == null) {
            return;
        }
        if (root.left) {
            preorder(root.left);
        }
        arry.push(root.val);
        if (root.right) {
            preorder(root.right);
        }
    }
    preorder(root);
    return arry[k - 1];
};

