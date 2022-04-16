//https://leetcode.com/problems/sort-colors/submissions/

var sortColors = function (nums) {
    if (nums.length <= 1) return nums;
    let left = 0;
    while (left < nums.length - 1) {
        let right = left + 1;
        while (right < nums.length) {
            if (nums[left] > nums[right]) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
            }
            right++;
        }
        left++;
    }
};

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

//Intuition
//Sort using two pointers
