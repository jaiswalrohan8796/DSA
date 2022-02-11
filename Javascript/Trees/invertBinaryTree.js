//https://leetcode.com/problems/invert-binary-tree/submissions/

var invertTree = function (root) {
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
        node = queue.pop();
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return root;
};

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
