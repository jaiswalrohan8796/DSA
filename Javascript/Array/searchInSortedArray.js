//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

var searchRange = function (nums, target) {
    let res = [-1, -1];
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] < target) i = mid + 1;
        else j = mid;
    }
    if (nums[i] != target) return res;
    res[0] = i;
    j = nums.length - 1;
    while (i < j) {
        let mid = Math.floor((i + j) / 2) + 1;
        if (nums[mid] > target) j = mid - 1;
        else i = mid;
    }
    res[1] = j;
    return res;
};

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
