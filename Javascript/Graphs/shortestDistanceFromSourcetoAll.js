//Shhorted Distance from Source Node to every other Node in Graph with No edge weights

var shortestDistance = function (V, adj) {
    let gp = new Map();
    for (let i = 0; i < V; i++) {
        let tmp = adj[i].map((v) => Number(v));
        gp.set(i, tmp);
    }
    let step = 0;
    let distances = Array(V).fill(Number.MAX_SAFE_INTEGER);
    let vis = Array(V).fill(false);
    let que = [0];
    vis[0] = true;
    while (que.length > 0) {
        let curr = que.shift();
        distances[curr] = Math.min(distances[curr], step);
        step += 1;
        for (let nei of gp.get(curr)) {
            if (!vis[nei]) {
                vis[nei] = true;
                que.push(nei);
            }
        }
    }
    return distances;
};
