//https://leetcode.com/problems/subtree-of-another-tree/description/

var isSubtree = function(root, subRoot) {
    function sameTree(root1, root2) {
        if(root1 == null && root2 == null) return true
        if(root1 == null || root2 == null) return false
        if(root1.val != root2.val) return false
        return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)
    }
    let ans = false
    let que = [root]
    while(que.length > 0) {
        let node = que.shift()
        if(node.val == subRoot.val) {
            ans = ans || sameTree(node, subRoot)
        }
        if(node.left) {
            que.push(node.left)
        }
        if(node.right) {
            que.push(node.right)
        }
    }
    return ans
};
