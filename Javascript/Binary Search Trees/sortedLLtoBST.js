//https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/

var sortedListToBST = function (head) {
    nums = [];
    let curr = head;
    while (curr) {
        nums.push(curr.val);
        curr = curr.next;
    }
    function helper(nums) {
        if (nums.length == 0) {
            return null;
        }
        let mid = Math.floor(nums.length / 2);
        let root = new TreeNode(nums[mid]);
        root.left = helper(nums.slice(0, mid));
        root.right = helper(nums.slice(mid + 1, nums.length));
        return root;
    }
    return helper(nums);
};

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
