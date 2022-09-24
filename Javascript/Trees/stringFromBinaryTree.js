//https://leetcode.com/problems/construct-string-from-binary-tree/

var tree2str = function(root) {
    function helper(node, str) {
        str[0] += node.val
        if(node.left) {
            str[0] += "("
            helper(node.left, str)
            str[0] += ")"
        }
        if(node.left == null && node.right) {
            str[0] += "()"
        }
        if(node.right) {
            str[0] += "("
            helper(node.right, str)
            str[0] += ")"
        }
    }
    
    let ans = [""]
    helper(root, ans)
    return ans[0]
};
