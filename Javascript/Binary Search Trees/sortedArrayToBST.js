//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/

var sortedArrayToBST = function(nums) {
    function helper(nums) {
        if(nums.length == 0) {
            return null
        }
        let mid = Math.floor(nums.length/2)
        let root = new TreeNode(nums[mid])
        root.left = helper(nums.slice(0,mid))
        root.right = helper(nums.slice(mid+1,nums.length))
        return root
    }
    return helper(nums)
};

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted