//https://leetcode.com/problems/rotate-array/submissions/

var rotate = function (nums, k) {
    k = k % nums.length;
    if (k > nums.length) {
        nums.reverse();
    } else {
        temps = nums.splice(nums.length - k, k);
        nums.unshift(...temps);
    }
};

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
