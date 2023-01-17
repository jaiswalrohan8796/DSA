//https://leetcode.com/problems/rotate-array/submissions/

//two pointers
//1. reverse complete
//2. rev left of k
//3. rev right of k (including k)

var rotate = function (nums, k) {
    k = k % nums.length;
    rev(nums, 0, nums.length - 1);
    rev(nums, 0, k - 1);
    rev(nums, k, nums.length - 1);
    function rev(nums, lo, hi) {
        while (lo < hi) {
            [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
            lo++;
            hi--;
        }
    }
};

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
