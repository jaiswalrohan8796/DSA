//https://leetcode.com/problems/find-pivot-index/submissions/

var pivotIndex = function (nums) {
    let rightSum = nums.reduce((acc, v) => acc + v, 0) - nums[0];
    let leftSum = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (leftSum == rightSum) {
            return i;
        }
        leftSum += nums[i];
        rightSum -= nums[i + 1] ? nums[i + 1] : 0;
        console.log(leftSum, rightSum);
    }
    return -1;
};

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
