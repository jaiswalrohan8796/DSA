//https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/

var averageOfLevels = function (root) {
    let avg = [];
    const queue = [];
    queue.push(root);
    while (queue.length != 0) {
        const level = [];
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
        let len = level.length;
        let summ = level.reduce((acc, curr) => acc + curr, 0);
        avg.push(summ / len);
    }
    return avg;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
