//https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/

var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const stack = [];
    stack.push(root);
    const result = [];
    while (stack.length > 0) {
        const size = stack.length;
        const temp = [];
        for (let i = 0; i < size; i++) {
            const node = stack.shift();
            temp.push(node.val);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
};


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]