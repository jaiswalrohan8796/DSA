//https://leetcode.com/problems/flatten-binary-tree-to-linked-list/submissions/

var flatten = function(root) {
    if(!root) return null
    let stack = [root]
    while(stack.length != 0) {
        let curr = stack.pop()
        if(curr.right) {
            stack.push(curr.right)
        }
        if(curr.left) {
            stack.push(curr.left)
        }
        if(stack.length != 0) {
            curr.right = stack[stack.length-1]
        }
        curr.left = null
    }
    return root
}
