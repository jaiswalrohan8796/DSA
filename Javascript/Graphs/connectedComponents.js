//
let A = 4;
let B = [
    [1, 2],
    [2, 3],
];

let graph = {};
for (let edge of B) {
    let src = edge[0];
    let dest = edge[1];
    if (!(src in graph)) graph[src] = [];
    if (!(dest in graph)) graph[dest] = [];
    graph[src].push(dest);
    graph[dest].push(src);
}
for (let i = 1; i <= A; i++) {
    if (!(i in graph)) graph[i] = [];
}
console.log(graph);
//connected components
let count = 0;
let visited = new Set();
for (let node in graph) {
    if (!visited.has(String(node))) {
        dfs(graph, node);
        count += 1;
    }
}
console.log(count);
function dfs(graph, node) {
    visited.add(String(node));
    for (let neigh of graph[node]) {
        if (!visited.has(String(neigh))) {
            dfs(graph, neigh);
        }
    }
}
