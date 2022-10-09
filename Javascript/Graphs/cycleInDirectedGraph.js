//https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/

class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        // code here
        let gp = new Map();
        for (let i = 0; i < V; i++) {
            let tmp = adj[i].map((v) => Number(v));
            gp.set(i, tmp);
        }

        function isCycle(node, vis, inner_vis, gp) {
            vis.set(node, 1);
            inner_vis.set(node, 1);
            for (let nei of gp.get(node)) {
                if (!vis.has(nei)) {
                    if (isCycle(nei, vis, inner_vis, gp)) return true;
                    else {
                        if (inner_vis.has(node)) {
                            return true;
                        }
                    }
                }
            }
            inner_vis.delete(node);
            return false;
        }
        let vis = new Map();
        let inner_vis = new Map();
        for (let i = 0; i < V; i++) {
            if (!vis.has(i)) {
                if (isCycle(i, vis, inner_vis, gp)) return true;
            }
        }
        return false;
    }
}
