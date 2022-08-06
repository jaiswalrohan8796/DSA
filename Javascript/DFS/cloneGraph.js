//https://leetcode.com/problems/clone-graph/submissions/

var cloneGraph = function (node) {
    var map = {};
    return dfs(node);

    function dfs(node) {
        if (!node) return node;
        if (!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map((nei) => dfs(nei));
        }
        return map[node.val];
    }
};
