//https://leetcode.com/problems/squares-of-a-sorted-array/submissions/

var sortedSquares = function (nums) {
    let ans = [];
    let l = 0;
    let r = nums.length - 1;
    for (let k = nums.length - 1; k >= 0; k--) {
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            ans[k] = nums[l] * nums[l];
            l++;
        } else {
            ans[k] = nums[r] * nums[r];
            r--;
        }
    }
    return ans;
};

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
