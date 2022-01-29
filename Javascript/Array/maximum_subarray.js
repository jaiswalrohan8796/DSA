//https://leetcode.com/problems/maximum-subarray/

//Wrong Submission (Brute Force)

var maxSubArray = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    let maxms = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j >= i; j--) {
            let summ = nums.slice(i, j).reduce((acc, v) => acc + v, 0);
            if (summ > maxms) {
                maxms = summ;
            }
        }
    }
    return maxms;
};

//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


let num = 124
console.log(String(num).split(','))