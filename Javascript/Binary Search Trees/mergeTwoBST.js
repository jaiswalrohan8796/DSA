//https://practice.geeksforgeeks.org/problems/merge-two-bst-s/

class BSTIterator {
    constructor(root) {
        this.stack = []
        this.insert(root)
    }
    insert(node) {
        while(node) {
            this.stack.push(node)
            node = node.left
        }
    }
    next() {
        let popped = this.stack.pop()
        this.insert(popped.right)
        return popped.data
    }
    
    hasNext() {
        return this.stack.length != 0
    }
    
    peek() {
        return this.stack[this.stack.length-1].data
    }
}


class Solution
{
    //Function to return a list of integers denoting the node 
    //values of both the BST in a sorted order.
    merge(root1, root2)
    {
        //your code here
        let ans = []
        let i1 = new BSTIterator(root1)
        let i2 = new BSTIterator(root2)
        while(i1.hasNext() && i2.hasNext()) {
            if(i1.peek() <= i2.peek()) {
                ans.push(i1.next())
            }
            else {
                ans.push(i2.next())
            }
        }
        while(i1.hasNext()) {
            ans.push(i1.next())
        }
        while(i2.hasNext()) {
            ans.push(i2.next())
        }
        return ans
    }
}
