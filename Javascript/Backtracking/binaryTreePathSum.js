//https://leetcode.com/problems/path-sum-ii/submissions/

var pathSum = function (root, targetSum) {
    let res = [];
    backtrack(root, [], targetSum, res);
    return res;
};

function backtrack(node, path, remain, res) {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right && remain == node.val) {
        res.push([...path]);
        return;
    }
    backtrack(node.left, path.slice(), remain - node.val, res);
    backtrack(node.right, path.slice(), remain - node.val, res);
}
