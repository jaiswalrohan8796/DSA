//https://practice.geeksforgeeks.org/problems/bipartite-graph/

class Solution {
    isBipartite(V, adj) {
        let gp = new Map();
        for (let i = 0; i < V; i++) {
            let tmp = adj[i].map((v) => Number(v));
            gp.set(i, tmp);
        }

        function BFS(node, color, gp) {
            color[node] = 0;
            let que = [node];
            while (que.length > 0) {
                let curr = que.shift();
                for (let nei of gp.get(curr)) {
                    if (color[nei] == -1) {
                        color[nei] = 1 - color[curr];
                        que.push(nei);
                    } else if (color[nei] == color[curr]) {
                        return false;
                    }
                }
            }
            return true;
        }

        let color = Array(V).fill(-1);
        for (let i = 0; i < V; i++) {
            if (color[i] == -1) {
                if (!BFS(i, color, gp)) {
                    return false;
                }
            }
        }
        return true;
    }
}
