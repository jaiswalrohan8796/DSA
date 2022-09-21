var rightSideView = function (root) {
    let res = [];
    function helper(node, level, res) {
        if (!node) return;
        if (res.length == level) {
            res.push(node.val);
        }
        helper(node.left, level + 1, res);
        helper(node.right, level + 1, res);
    }
    helper(root, 0, res);
    return res;
};
