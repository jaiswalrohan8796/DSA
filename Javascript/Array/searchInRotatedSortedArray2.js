//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/submissions/

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        if (nums[low] == target) {
            return true;
        } else if (nums[high] == target) {
            return true;
        } else if (target > nums[low]) {
            while (low < high && nums[low + 1] == nums[low]) {
                low++;
            }
            low++;
        } else if (target < nums[high]) {
            while (low < high && nums[high - 1] == nums[high]) {
                high--;
            }
            high--;
        } else {
            break;
        }
    }
    return false;
};

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
