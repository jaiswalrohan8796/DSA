//https://leetcode.com/problems/permutations/submissions/

var permute = function (nums) {
    function backtrack(start, temp, res) {
        if (temp.length == nums.length) {
            res.push([...temp]);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (temp.includes(nums[i])) continue;
                temp.push(nums[i]);
                backtrack(i + 1, temp, res);
                temp.pop();
            }
        }
    }
    let res = [];
    backtrack(0, [], res);
    return res;
};

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
