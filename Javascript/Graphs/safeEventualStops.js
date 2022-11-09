//https://leetcode.com/problems/find-eventual-safe-states/description/

var eventualSafeNodes = function(graph) {
    let V = graph.length
    let global_vis = new Array(V).fill(false)
    let path_vis = new Array(V).fill(false)
    let safe_nodes = new Array(V).fill(false)
    for(let i = 0; i < V; i++) {
        if(global_vis[i] == false) {
            isCycle(i, global_vis, path_vis, graph, safe_nodes)
        }
    }
    //console.log(safe_nodes)
    let ans = []
    for(let i = 0; i < V; i++) {
        if(safe_nodes[i] == true) {
            ans.push(i)
        }
    }
    return ans
};

function isCycle(node, global_vis, path_vis, graph, safe_nodes) {
    global_vis[node] = true
    path_vis[node] = true
    safe_nodes[node] = false
    for(let nei of graph[node]) {
        if(global_vis[nei] == false) {
            if(isCycle(nei, global_vis, path_vis, graph, safe_nodes)) {
                return true
            }
        }
        else if(path_vis[nei] == true) {
            return true
        }
    }
    path_vis[node] = false
    safe_nodes[node] = true
    return false
}
