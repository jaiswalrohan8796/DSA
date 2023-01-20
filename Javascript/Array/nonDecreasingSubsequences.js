//https://leetcode.com/problems/non-decreasing-subsequences/description/

var findSubsequences = function(nums) {
    function backtrack(idx, ds, prev) {
        if(ds.length >= 2) {
            res.add([...ds].join(":"))
        }
        for(let i = idx; i < nums.length; i++) {
            let old_prev = prev
            if(prev <= nums[i]) {
                ds.push(nums[i])
                prev = nums[i]
                backtrack(i+1, ds, prev)
                ds.pop()
                prev = old_prev
            }
        }
    }
    let res = new Set()
    backtrack(0, [], -Infinity)
    let ans = []
    for(let str of res) {
        ans.push(str.split(":"))
    }
    return ans
};

