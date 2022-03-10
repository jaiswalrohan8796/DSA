function maxLevelSum(root) {
    if (root == null) {
        return 0;
    }
    let maxSum = 0;
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.data;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

class Node {
    constructor(data) {
        (this.data = data), (this.left = null), (this.right = null);
    }
}

bt = new Node(1);
bt.left = new Node(9);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(5);

console.log(maxLevelSum(bt));
