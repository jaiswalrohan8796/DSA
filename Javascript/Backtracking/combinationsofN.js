//https://leetcode.com/problems/combinations/submissions/

var combine = function (n, k) {
    function dfs(ds, start, n, k, res) {
        if (k == 0) {
            res.push([...ds]);
            return;
        }
        for (let i = start; i <= n; i++) {
            ds.push(i);
            dfs(ds, i + 1, n, k - 1, res);
            ds.pop();
        }
    }

    let res = [];
    dfs([], 1, n, k, res);
    return res;
};
