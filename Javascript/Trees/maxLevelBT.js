//https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/

var maxLevelSum = function (root) {
    let ans = [1, root.val];
    let level = 0;
    let stack = [root];
    while (stack.length != 0) {
        let size = stack.length;
        let temp = 0;
        for (let i = 0; i < size; i++) {
            let node = stack.shift();
            temp += node.val;
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        level++;
        if (temp > ans[1]) {
            ans = [level, temp];
        }
    }
    return ans[0];
};


