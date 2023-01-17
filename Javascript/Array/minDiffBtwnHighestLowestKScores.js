//https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

//Two Pointer with sort

var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a - b)
    console.log(nums)
    let minn = Infinity
    let l = 0
    let r = k - 1
    while(r < nums.length) {
        minn = Math.min(minn, nums[r] - nums[l])
        l++
        r++
    }
    return minn
};
