//https://leetcode.com/problems/contains-duplicate-ii/submissions/

var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

// Input: nums = [1,2,3,1], k = 3
// Output: true
