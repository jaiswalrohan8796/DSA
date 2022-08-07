//https://leetcode.com/problems/reachable-nodes-with-restrictions/submissions/

var reachableNodes = function (n, edges, restricted) {
    let gp = {};
    for (let e of edges) {
        let s = e[0];
        let d = e[1];
        if (!(s in gp)) gp[s] = [];
        if (!(d in gp)) gp[d] = [];
        gp[s].push(d);
        gp[d].push(s);
    }
    let ret = new Map();
    for (let r of restricted) {
        ret.set(r, 1);
    }
    let ans = 0;
    let seen = new Map();
    function DFS(node, graph) {
        //invalid for dfs
        if (!node) return;
        if (seen.has(node)) return;
        if (ret.has(Number(node))) return;
        //valid
        seen.set(node, 1);
        ans++;
        for (let nei of gp[node]) {
            DFS(String(nei), gp);
        }
    }
    DFS("0");
    return ans;
};

// Input: n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
// Output: 4
// Explanation: The diagram above shows the tree.
// We have that [0,1,2,3] are the only nodes that can be reached from node 0 without visiting a restricted node.
