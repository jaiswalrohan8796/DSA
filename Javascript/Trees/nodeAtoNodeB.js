//https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/

var getDirections = function(root, startValue, destValue) {
    let lca = LCA(root, startValue, destValue)
    let depth = findDepth(lca, startValue)
    let path = findPath(lca, destValue)
    return "U".repeat(depth).concat(path)
    
    function LCA(node, s, d) {
        if(!node) return null
        if(node.val == s || node.val == d) return node
        let left = LCA(node.left, s ,d)
        let right = LCA(node.right, s, d)
        if(left && right) return node
        return left || right
    }
    
    function findDepth(node, s, c=0) {
        if(!node) return 0
        if(node.val == s) return c
        return findDepth(node.left, s, c+1) || findDepth(node.right, s, c+1)
    }
    
    function findPath(node, d, str="") {
        if(!node) return ""
        if(node.val == d) return str
        return findPath(node.left, d, str+"L") || findPath(node.right, d, str+"R")
    }
};
