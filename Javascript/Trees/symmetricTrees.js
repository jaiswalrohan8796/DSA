//https://leetcode.com/problems/symmetric-tree/submissions/

// recursive
var isSymmetric = function (root) {
    if (!root) return true;
    return isSym(root.left, root.right);
};

function isSym(left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val != right.val) return false;
    return isSym(left.left, right.right) && isSym(left.right, right.left);
}

//Naive approach

var isSymmetric = function (root) {
    let left = [];
    let right = [];
    function leftTraversal(root) {
        if (root) {
            left.push(root.val);
            leftTraversal(root.left);
            leftTraversal(root.right);
        } else {
            left.push(null);
        }
    }
    function rightTraversal(root) {
        if (root) {
            right.push(root.val);
            rightTraversal(root.right);
            rightTraversal(root.left);
        } else {
            right.push(null);
        }
    }
    leftTraversal(root.left);
    rightTraversal(root.right);
    if (left.length != right.length) {
        return false;
    }
    let flag = true;
    for (let i = 0; i < left.length; i++) {
        if (left[i] != right[i]) {
            flag = false;
            break;
        }
    }
    return flag;
};

// Input: root = [1,2,2,3,4,4,3]
// Output: true
