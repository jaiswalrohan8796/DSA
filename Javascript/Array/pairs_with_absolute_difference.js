//https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

var countKDifference = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) == k) {
                count++;
            }
        }
    }
    return count;
};

/*
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
 */
