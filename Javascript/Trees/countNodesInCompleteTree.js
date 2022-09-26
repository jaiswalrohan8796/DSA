//https://leetcode.com/problems/count-complete-tree-nodes/submissions/

var countNodes = function (root) {
    if (!root) return 0;
    let lh = findH(root, "L");
    let rh = findH(root, "R");
    if (lh == rh) return Math.pow(2, lh) - 1;
    else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};

function findH(node, mode) {
    let h = 0;
    while (node) {
        h += 1;
        if (mode == "L") {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return h;
}
