//https://leetcode.com/problems/find-bottom-left-tree-value/

var findBottomLeftValue = function(root) {
    let leftMost = null
    let que = [root]
    while(que.length != 0) {
        let size = que.length
        for(let i = 0; i < size; i++) {
            let node = que.shift()
            leftMost = node.val
            if(node.right) {
                que.push(node.right)
            }
            if(node.left) {
                que.push(node.left)
            }
        }
    }
    return leftMost
};
