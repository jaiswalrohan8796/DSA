//https://leetcode.com/problems/diameter-of-binary-tree/submissions/

var diameterOfBinaryTree = function (root) {
    let res = 0;
    function dfs(root) {
        if (!root) {
            return 0;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return res;
};

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
