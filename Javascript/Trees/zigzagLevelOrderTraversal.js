//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/

var zigzagLevelOrder = function (root) {
    const queue = [];
    const result = [];
    queue.push(root);
    let count = 0;
    if (!root) {
        return result;
    }
    while (queue.length != 0) {
        let level = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (count % 2 == 0) {
            result.push(level);
        } else {
            level.reverse();
            result.push(level);
        }
        count++;
    }
    return result;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]