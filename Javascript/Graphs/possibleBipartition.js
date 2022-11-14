//https://leetcode.com/problems/possible-bipartition/description/

var possibleBipartition = function(n, dislikes) {
    let G = new Map()
    for(let [s,d] of dislikes) {
        if(!G.has(s)) G.set(s, [])
        if(!G.has(d)) G.set(d, [])
        G.get(s).push(d)
        G.get(d).push(s)
    }
    //console.log(G)
    function BFS(node, color, gp) {
        color[node] = 0;
        let que = [node];
        while (que.length > 0) {
            let curr = que.shift();
            if(!gp.has(curr)) continue
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

    let color = Array(n+1).fill(-1);
    for (let i = 1; i <= n; i++) {
        if (color[i] == -1) {
            if (!BFS(i, color, G)) {
                return false;
            }
        }
    }
    return true;
};
