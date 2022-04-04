//https://leetcode.com/problems/all-paths-from-source-to-target/submissions/

var allPathsSourceTarget = function (graph) {
    let GP = {};
    for (let i = 0; i < graph.length; i++) {
        GP[i] = graph[i];
    }
    const target = graph.length - 1;
    let res = [];
    function dfs(node, path) {
        path.push(node);
        if (node == target) {
            res.push(path);
            return;
        }
        for (let edge of graph[node]) {
            dfs(edge, [...path]);
        }
    }
    dfs(0, []);
    return res;
};

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
