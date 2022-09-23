//https://leetcode.com/problems/binary-tree-tilt/

var findTilt = function(root) {
    function helper(node, sum) {
        if(!node) return 0
        let left = helper(node.left, sum)
        let right = helper(node.right, sum)
        sum[0] += Math.abs(left - right)
        return left + right + node.val 
    }
    let sum = [0]
    helper(root, sum)
    return sum[0]
};
