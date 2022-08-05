//https://leetcode.com/problems/combination-sum-ii/submissions/

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    function backtrack(res, path, candidates, remain, start) {
        if (remain < 0) return;
        else if (remain == 0) {
            res.push([...path]);
        } else {
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] == candidates[i - 1]) continue;
                path.push(candidates[i]);
                backtrack(res, path, candidates, remain - candidates[i], i + 1);
                path.pop();
            }
        }
    }
    backtrack(res, [], candidates, target, 0);
    return res;
};

//https://leetcode.com/problems/combination-sum-ii/discuss/16878/Combination-Sum-I-II-and-III-Java-solution-(see-the-similarities-yourself)
