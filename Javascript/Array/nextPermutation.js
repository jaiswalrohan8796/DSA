//https://leetcode.com/problems/next-permutation/submissions/

var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            let nextLarge = findLarge(i);
            swap(i, nextLarge);
            reverse(i + 1);
            return;
        }
    }
    nums.reverse();

    function reverse(idx) {
        let start = idx,
            end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function findLarge(idx) {
        for (let i = nums.length - 1; i > idx; i--) {
            if (nums[i] > nums[idx]) {
                return i;
            }
        }
    }
};

//Question
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]

//Solution
// Approach

// Find the first decreasing index moving from end to start
// E.g. [7, 2, 3, 1, 5, 4, 3, 2, 0] num 1 is the first decreasing index going from the end backwards
// Swap num 1 with the next large num to its right which is 2
// [7, 2, 3, 2, 5, 4, 3, 1, 0]
// Reverse/sort nums from that idx (nums 1) to the right
// [7, 2, 3, 2, 0, 1, 3, 4, 5]
// If there is no next permutation reverse the array
