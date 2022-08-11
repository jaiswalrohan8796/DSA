//https://leetcode.com/problems/validate-binary-search-tree/submissions/

var isValidBST = function (root) {
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
    for (let i = 0; i < arry.length; i++) {
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[i] >= arry[j]) {
                return false;
            }
        }
    }
    return true;
};


var isValidBST = function(root) {
    function isBST(root, min, max) {
        if(!root) return true
        if(root.val >= max || root.val <= min) return false
        return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
    }
    
    return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};



// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
