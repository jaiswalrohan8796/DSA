//https://leetcode.com/problems/combination-sum-iii/submissions/

var combinationSum3 = function (k, n) {
    let res = [];
    function backtrack(res, path, k, rem, start) {
        if (path.length > k) return;
        else if (path.length == k && rem == 0) {
            res.push([...path]);
        } else {
            for (let i = start; i <= 9; i++) {
                path.push(i);
                backtrack(res, path, k, rem - i, i + 1);
                path.pop();
            }
        }
    }
    backtrack(res, [], k, n, 1);
    return res;
};


