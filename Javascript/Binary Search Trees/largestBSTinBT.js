//https://practice.geeksforgeeks.org/problems/largest-bst/1

class BSTNode {
    constructor(min, max, height) {
        this.min = min
        this.max = max
        this.H = height
    }
}

class Solution {
  	largestBst(root){
  		//code here
  		const MIN = Number.MIN_SAFE_INTEGER
  		const MAX = Number.MAX_SAFE_INTEGER
  		function helper(root) {
  		    if(!root) return new BSTNode(MAX, MIN, 0)
  		    let left = helper(root.left)
  		    let right = helper(root.right)
  		    
  		    if(left.max < root.key && root.key < right.min) {
  		        return new BSTNode(Math.min(left.min, root.key), Math.max(root.key, right.max), 1 + left.H + right.H)
  		    }
  		    else {
  		        return new BSTNode(MIN, MAX, Math.max(left.H, right.H))
  		    }
  		}
  		return helper(root).H
  	}
}
