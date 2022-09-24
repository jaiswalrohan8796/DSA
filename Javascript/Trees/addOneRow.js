// /https://leetcode.com/problems/add-one-row-to-tree/submissions/

var addOneRow = function (root, val, depth) {
    if (depth == 1) {
        ans = new TreeNode(val);
        ans.left = root;
        return ans;
    }
    let step = 1;
    let que = [root];
    while (step < depth && que.length != 0) {
        let size = que.length;
        for (let i = 0; i < size; i++) {
            let node = que.shift();
            if (step == depth - 1) {
                let leftPart = node.left;
                let rightPart = node.right;
                node.left = new TreeNode(val);
                node.right = new TreeNode(val);
                node.left.left = leftPart;
                node.right.right = rightPart;
            }
            if (node.left) {
                que.push(node.left);
            }
            if (node.right) {
                que.push(node.right);
            }
        }
        step++;
    }
    return root;
};
