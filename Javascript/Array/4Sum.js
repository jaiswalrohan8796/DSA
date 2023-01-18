//https://leetcode.com/problems/4sum/description/

//Two pointers : 3 sum with one more for loop for 1st & 2nd element

var fourSum = function (nums, target) {
    const res = [];
    if (nums.length < 4) return res;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let lo = j + 1;
            let hi = nums.length - 1;
            while (lo < hi) {
                let sum = nums[i] + nums[j] + nums[lo] + nums[hi];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[lo], nums[hi]]);
                    while (nums[lo] == nums[lo + 1]) lo++;
                    while (nums[hi] == nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if (sum < target) lo++;
                else hi--;
            }
            while (nums[j] == nums[j + 1]) j++;
        }
        while (nums[i] == nums[i + 1]) i++;
    }
    return res;
};

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
