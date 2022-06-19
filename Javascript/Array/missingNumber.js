//https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
    let n = nums.length;
    let total = (n * (n + 1)) / 2;
    let currSum = nums.reduce((acc, v) => acc + v, 0);
    return total - currSum;
};

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
