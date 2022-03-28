//https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        if (nums[low] == target) {
            return low;
        } else if (nums[high] == target) {
            return high;
        } else if (target > nums[low]) {
            low++;
        } else if (target < nums[high]) {
            high--;
        } else {
            break;
        }
    }
    return -1;
};


//Input: nums = [4,5,6,7,0,1,2], target = 0
//Output: 4