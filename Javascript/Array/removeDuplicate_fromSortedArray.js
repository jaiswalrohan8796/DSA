//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function (nums) {
    let x = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[x] = nums[i + 1];
            x++;
        }
    }
    return x;
};

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
