//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/submissions/

var findTarget = function (root, k) {
    let arry = [];
    function inorder(root) {
        if (root == null) {
            return;
        }
        arry.push(root.val);
        if (root.left) {
            inorder(root.left);
        }
        if (root.right) {
            inorder(root.right);
        }
    }
    inorder(root);
    for (let i = 0; i < arry.length; i++) {
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[i] + arry[j] == k) {
                return true;
            }
        }
    }
    return false;
};

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
