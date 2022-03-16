//https://leetcode.com/problems/increasing-order-search-tree/submissions/

var increasingBST = function (root) {
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
    let bst = new TreeNode(arry[0]);
    let curr = bst;
    for (let i = 1; i < arry.length; i++) {
        curr.right = new TreeNode(arry[i]);
        curr = curr.right;
    }
    return bst;
};

// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
