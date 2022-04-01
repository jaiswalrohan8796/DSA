//https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/submissions/

var minimumDifference = function (nums, k) {
    if (nums.length <= 1) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    console.log(nums);
    let low = 0;
    let high = 0;
    let curr = [];
    while (high < k) {
        curr.push(nums[high]);
        high++;
    }
    let minm = Infinity;
    while (high <= nums.length) {
        minm = Math.min(Math.max(...curr) - Math.min(...curr), minm);
        curr.shift();
        curr.push(nums[high]);
        high++;
    }
    return minm;
};



// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

//Intuition
//Sort & apply sliding window