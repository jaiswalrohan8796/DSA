//https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/

var preorder = function(root) {
    let res = []
    function preOrder(node) {
        if(!node) return
        res.push(node.val)
        if(node.children) {
            for(let child of node.children) {
                preOrder(child)
            }
        }
    }
    preOrder(root)
    return res
};


// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
