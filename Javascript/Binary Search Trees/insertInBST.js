//https://leetcode.com/problems/insert-into-a-binary-search-tree/submissions/

var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    let curr = root
    while(root) {
        if(val < root.val) {
            if(root.left) {
                root = root.left
            }
            else {
                root.left = new TreeNode(val)
                break
            }
        }
        else {
            if(root.right) {
                root = root.right
            }
            else {
                root.right = new TreeNode(val)
                break
            }
        }
    }
    return curr
};
