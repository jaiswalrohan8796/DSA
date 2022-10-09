//https://leetcode.com/problems/find-center-of-star-graph/submissions/

var findCenter = function (edges) {
    let gp = new Map();
    let n = edges.length;
    for (let edge of edges) {
        let s = edge[0];
        let d = edge[1];
        if (!gp.has(s)) {
            gp.set(s, []);
        }
        if (!gp.has(d)) {
            gp.set(d, []);
        }
        gp.get(s).push(d);
        gp.get(d).push(s);
    }
    for (let key of gp.keys()) {
        if (gp.get(key).length == n) return key;
    }
};

// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1
