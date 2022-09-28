//Morris Traversal is an inorder traversal of binary tree in constant space , but amortized O(N) time complexity.


var inorderTraversal = function(root) {
    let ans = []
    let curr = root
    while(curr) {
        if(curr.left == null) {
            ans.push(curr.val)
            curr = curr.right
        }
        else {
            let prev = curr.left
            while(prev.right && prev.right != curr) {
                prev = prev.right
            }
            if(prev.right == null) {
                prev.right = curr
                curr = curr.left
            }
            else {
                prev.right == null
                ans.push(curr.val)
                curr = curr.right
            }
        }
    }
    return ans
};
