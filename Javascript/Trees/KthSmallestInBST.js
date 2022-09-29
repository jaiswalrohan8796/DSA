//https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/

//Morris Inorder Traversal & counter

var kthSmallest = function(root, k) {
    let ans = []
    let c = 1
    let curr = root
    while(curr) {
        if(curr.left == null) {
            if(c == k) {
                ans.push(curr.val)
                c += 1
            }
            c += 1
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
                if(c == k) {
                    ans.push(curr.val)
                    c += 1
                }
                c += 1
                curr = curr.right
            }
        }
    }
    return ans[0]
};
