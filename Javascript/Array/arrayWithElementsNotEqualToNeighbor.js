//https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/description/

var rearrangeArray = function(nums) {
    nums.sort((a,b) => a-b)
    let res = []
    let l = 0
    let r = nums.length - 1
    while(l < r) {
        res.push(nums[l++])
        res.push(nums[r--])
    }
    if(l == r) res.push(nums[l])
    return res
};

// Input: nums = [1,2,3,4,5]
// Output: [1,2,4,5,3]
// Explanation:
// When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
// When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
// When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.
