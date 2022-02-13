//https://leetcode.com/problems/path-sum/submissions/

var hasPathSum = function (root, targetSum) {
    function dfs(root, target) {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return root.val - target === 0;
        }
        return (
            dfs(root.left, target - root.val) ||
            dfs(root.right, target - root.val)
        );
    }
    return dfs(root, targetSum);
};


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: 5 + 4 + 11 +12 == 22