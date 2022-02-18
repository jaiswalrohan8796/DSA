//https://leetcode.com/problems/binary-tree-paths/submissions/

var binaryTreePaths = function (root) {
    let ans = [];
    let count = 0;
    function sumN(root, str) {
        if (!root) {
            return null;
        }
        if (count == 0) {
            str += `${String(root.val)}`;
        } else {
            str += `->${String(root.val)}`;
        }
        count++;
        if (root.left) {
            sumN(root.left, str);
        }
        if (root.right) {
            sumN(root.right, str);
        }
        if (root.left == null && root.right == null) {
            ans.push(str);
        }
    }
    sumN(root, "");

    return ans;
};


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]