//https://leetcode.com/problems/permutations/submissions/

var permute = function (nums) {
    function backtrack(temp, res, used) {
        if (temp.length == nums.length) {
            res.push([...temp]);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (used.has(nums[i])) continue;
                temp.push(nums[i]);
                used.set(nums[i])
                backtrack(temp, res, used);
                temp.pop();
                used.delete(nums[i])
            }
        }
    }
    let res = [];
    let used = new Map()
    backtrack(0, [], res, used);
    return res;
};

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
