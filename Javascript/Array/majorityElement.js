//https://leetcode.com/problems/majority-element/submissions/

var majorityElement = function (nums) {
    let n = Math.floor(nums.length / 2);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        if (map[nums[i]] > n) {
            return nums[i];
        }
    }
};

// Input: nums = [3,2,3]
// Output: 3
