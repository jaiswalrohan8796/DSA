//https://leetcode.com/problems/two-sum/submissions/

var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        if (another in map) {
            return [map[another], i];
        }
        map[nums[i]] = i;
    }
    return null;
};

//used map to fetch pair faster

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
