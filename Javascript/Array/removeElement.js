// /https://leetcode.com/problems/remove-element/submissions/

var removeElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i];
            x += 1;
        }
    }
    return x;
};

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
