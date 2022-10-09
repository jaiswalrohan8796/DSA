//https://leetcode.com/problems/find-if-path-exists-in-graph/submissions/

var validPath = function (n, edges, source, destination) {
    let gp = new Map();
    for (let [s, d] of edges) {
        if (!gp.has(s)) gp.set(s, []);
        if (!gp.has(d)) gp.set(d, []);
        gp.get(s).push(d);
        gp.get(d).push(s);
    }

    function findPath(src, dest) {
        let visited = new Map();
        visited.set(src, 1);
        let que = [src];
        while (que.length > 0) {
            let curr = que.shift();
            if (curr == dest) {
                return true;
            } else {
                for (let adj of gp.get(curr)) {
                    if (!visited.has(adj)) {
                        visited.set(adj, 1);
                        que.push(adj);
                    }
                }
            }
        }
        return false;
    }

    return findPath(source, destination);
};

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
