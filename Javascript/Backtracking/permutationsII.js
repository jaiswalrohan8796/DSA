//https://leetcode.com/problems/permutations-ii/

var permuteUnique = function (nums) {
    function backtrack(start, temp, res) {
        if (temp.length == nums.length) {
            res.push([...temp]);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (
                    used[i] ||
                    (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])
                )
                    continue;
                used[i] = true;
                temp.push(nums[i]);
                backtrack(i + 1, temp, res);
                used[i] = false;
                temp.pop();
            }
        }
    }
    let res = [];
    nums.sort();
    used = new Array(nums.length).fill(false);
    backtrack(0, [], res, used);
    return res;
};
