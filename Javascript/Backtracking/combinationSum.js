//https://leetcode.com/problems/combination-sum/submissions/

// power set
var combinationSum = function (candidates, target) {
    function backtrack(idx, temp, remain, res) {
        if (remain < 0) return;
        if (remain == 0) {
            res.push([...temp]);
        } else {
            for (let i = idx; i < candidates.length; i++) {
                temp.push(candidates[i]);
                backtrack(i, temp, remain - candidates[i], res);
                temp.pop();
            }
        }
    }   
    let res = [];
    backtrack(0, [], target, res);
    return res;
};

//take, not take approach
var combinationSum = function (candidates, target) {
    function dfs(idx, ds, res, target) {
        if (idx == candidates.length) {
            if (target == 0) {
                res.push([...ds]);
            }
            return;
        }
        //pick
        if (candidates[idx] <= target) {
            ds.push(candidates[idx]);
            dfs(idx, ds, res, target - candidates[idx]);
            ds.pop();
        }
        //not pick
        dfs(idx + 1, ds, res, target);
    }
    let res = [];
    dfs(0, [], res, target);
    return res;
};

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
