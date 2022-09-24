//https://leetcode.com/problems/print-binary-tree/submissions/

var printTree = function (root) {
    let res = [];
    let row = getHeight(root);
    let col = Math.pow(2, row) - 1;
    let temp = [];
    for (let i = 0; i < col; i++) {
        temp.push("");
    }
    for (let i = 0; i < row; i++) {
        res.push([...temp]);
    }
    populate(root, res, 0, row, 0, col - 1);
    return res;
};

function populate(root, res, r, row, i, j) {
    if (!root || r == row) return;
    res[r][~~((i + j) / 2)] = String(root.val);
    populate(root.left, res, r + 1, row, i, ~~((i + j) / 2) - 1);
    populate(root.right, res, r + 1, row, ~~((i + j) / 2) + 1, j);
}

function getHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}
