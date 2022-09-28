//https://leetcode.com/problems/recover-binary-search-tree/

var recoverTree = function(root) {
    let prev , first, sec = null
    function inorder(root) {
        if(!root) return
        //traverse left
        inorder(root.left)
        // check prev value with curr node
        if(prev) {
            if(prev.val > root.val) {
                // update the first node only once
                if(first == null) {
                    first = prev
                }
                //update the sec node at every mistake
                sec = root
            }
        }
        //update the prev pointer
        prev = root
        //traverse right
        inorder(root.right)
    }
    inorder(root)
    //swap the node values
    let tmp = first.val
    first.val = sec.val
    sec.val = tmp
}
