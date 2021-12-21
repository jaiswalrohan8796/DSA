//https://leetcode.com/problems/smallest-index-with-equal-value/submissions/

var smallestEqual = function (nums) {
    let ans = [];
    nums.map((item, idx, arr) => {
        if (idx % 10 == item) {
            ans.push(idx);
            return item;
        } else {
            return item;
        }
    });
    if (ans.length == 0) return -1;
    return Math.min(...ans);
};

/*
Input: nums = [0,1,2]
Output: 0
Explanation: 
i=0: 0 mod 10 = 0 == nums[0].
i=1: 1 mod 10 = 1 == nums[1].
i=2: 2 mod 10 = 2 == nums[2].
All indices have i mod 10 == nums[i], so we return the smallest index 0. 
*/
