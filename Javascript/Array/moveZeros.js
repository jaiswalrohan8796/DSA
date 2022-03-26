//https://leetcode.com/problems/move-zeroes/submissions/

var moveZeroes = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let index = 0;
    let curr = 0;
    while (index < nums.length) {
        if (nums[curr] != 0 && curr < nums.length) {
            nums[index] = nums[curr];
            curr++;
            index++;
        } else {
            curr++;
        }
        if (index < nums.length && curr >= nums.length) {
            nums[index] = 0;
            index++;
        }
    }
    console.log(nums);
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
