//https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph

class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(V, adj) {
        // code here
        let gp = new Map();
        for (let i = 0; i < V; i++) {
            let tmp = adj[i].map((v) => Number(v));
            gp.set(i, tmp);
        }

        function isCycle(node, gp, vis) {
            vis.set(node);
            let que = [[node, -1]];
            while (que.length > 0) {
                let [curr, parent] = que.shift();
                for (let nei of gp.get(curr)) {
                    if (nei == parent) continue;
                    if (vis.has(nei)) return true;
                    else {
                        vis.set(nei, 1);
                        que.push([nei, curr]);
                    }
                }
            }
            return false;
        }

        let vis = new Map();

        for (let i = 0; i < V; i++) {
            if (!vis.has(i)) {
                if (isCycle(i, gp, vis)) return true;
            }
        }
        return false;
    }
}
