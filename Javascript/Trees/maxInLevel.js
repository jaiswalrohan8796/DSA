//https://leetcode.com/problems/find-largest-value-in-each-tree-row/
  
  var largestValues = function(root) {
    let res = []
    if(!root) return res
    let que = [root]
    while(que.length != 0) {
        let size = que.length
        let maxLevel = Number.MIN_SAFE_INTEGER
        for(let i = 0; i < size; i++) {
            let node = que.shift()
            maxLevel = Math.max(maxLevel, node.val)
            if(node.left) {
                que.push(node.left)
            }
            if(node.right){
                que.push(node.right)
            }
        }
        res.push(maxLevel)
    }
    return res
};
