//https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst

class Solution {
    // return the Kth largest element in the given BST rooted at 'root'
    kthLargest(root, K) {
        //code here
        let stack = [];
        while (root || stack.length != 0) {
            if (root != null) {
                stack.push(root);
                root = root.right;
            } else {
                root = stack.pop();
                K -= 1;
                if (K == 0) {
                    return root.data;
                } else {
                    root = root.left;
                }
            }
        }
    }
}
