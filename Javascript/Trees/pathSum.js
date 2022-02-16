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

//another approach
var hasPathSum = function (root, targetSum) {
    let ans = [];
    function pathSum(root, summ) {
        if (!root) {
            return null;
        }
        summ += root.val;
        if (summ == targetSum && root.left == null && root.right == null) {
            ans.push(summ);
        }
        if (root.left) {
            pathSum(root.left, summ);
        }
        if (root.right) {
            pathSum(root.right, summ);
        }
    }
    pathSum(root, 0);
    if (ans.includes(targetSum)) {
        return true;
    }
    return false;
};

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: 5 + 4 + 11 +12 == 22
