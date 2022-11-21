//https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

var findCheapestPrice = function (n, flights, src, dst, k) {
    let G = new Map();
    for (let [s, d, w] of flights) {
        if (!G.has(s)) G.set(s, []);
        if (!G.has(d)) G.set(d, []);
        G.get(s).push([d, w]);
    }
    //console.log(G)
    let dist = new Array(n + 1).fill(Infinity);
    let que = [];
    que.push([0, src, 0]);
    dist[src] = 0;
    while (que.length > 0) {
        let [curr_step, curr_node, curr_cost] = que.shift();
        if (curr_step > k) continue;
        if (!G.has(curr_node)) continue;
        for (let [adj_node, adj_cost] of G.get(curr_node)) {
            if (dist[adj_node] > curr_cost + adj_cost && curr_step <= k) {
                dist[adj_node] = curr_cost + adj_cost;
                que.push([curr_step + 1, adj_node, dist[adj_node]]);
            }
        }
    }
    if (dist[dst] == Infinity) return -1;
    return dist[dst];
};
