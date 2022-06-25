//https://leetcode.com/problems/non-decreasing-array/submissions/

var checkPossibility = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length && count <= 1; i++) {
        if (nums[i - 1] > nums[i]) {
            count++;
            if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i];
            else {
                nums[i] = nums[i - 1];
            }
        }
    }
    return count <= 1;
};

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.
