//https://leetcode.com/problems/longest-consecutive-sequence/submissions/

var longestConsecutive = function(nums) {
    let hmap = new Map()
    for(let i = 0; i < nums.length; i++) {
        hmap.set(nums[i], i)
    }
    let maxx = 0
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if(hmap.has(curr - 1)) continue
        let size = 0
        while(hmap.has(curr)) {
            size += 1
            curr += 1
        }
        maxx = Math.max(maxx, size)
    }
    return maxx
};

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
