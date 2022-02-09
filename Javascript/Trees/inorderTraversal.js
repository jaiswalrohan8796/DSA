//https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

var inorderTraversal = function (root) {
    let ans = [];
    function inorder(root) {
        if (root) {
            inorder(root.left);
            ans.push(root.val);
            inorder(root.right);
        }
    }
    inorder(root);
    return ans;
};

// Input: root = [1,null,2,3]
// Output: [1,3,2]
