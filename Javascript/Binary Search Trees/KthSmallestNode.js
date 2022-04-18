//https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/

var kthSmallest = function(root, k) {
    let count = 0
    function inorder(root,k) {
        if(!root) return
        inorder(root.left,k)
        count += 1
        if(count == k) {
            ans = root.val
            return
        }
        inorder(root.right,k)
    }
    let ans = 0
    inorder(root,k)
    return ans
};

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

//Intuition
//Do inorder & increment the counter
//When counter == k save the value
