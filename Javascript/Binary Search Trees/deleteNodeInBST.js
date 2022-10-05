//https://leetcode.com/problems/delete-node-in-a-bst/submissions/


var deleteNode = function(root, key) {
    if(!root) return root
    let dummy = root
    if(root.val == key) {
        return helper(root)
    }
    while(root) {
        if(root.val > key) {
            if(root.left && root.left.val == key) {
                root.left = helper(root.left)
            }
            else {
                root = root.left
            }
        }
        else {
            if(root.right && root.right.val == key) {
                root.right = helper(root.right)
            }
            else {
                root = root.right
            }
        }
    }
    return dummy
    
    function helper(node) {
        if(node.left == null) {
            return node.right
        }
        if(node.right == null) {
            return node.left
        }
        let rightChild = node.right
        let lastLeftChild = findLastLeft(node.left)
        lastLeftChild.right = rightChild
        return node.left
    }
    
    function findLastLeft(curr) {
        if(curr.right == null) return curr
        return findLastLeft(curr.right)
    }
    
};
