//https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/submissions/

var distanceK = function (root, target, k) {
    function getEdges(root) {
        let edges = {};
        let que = [root];
        while (que.length != 0) {
            let node = que.pop();
            if (!edges[node.val]) {
                edges[node.val] = [];
            }
            if (node.left) {
                edges[node.val].push(node.left.val);
                if (!edges[node.left.val]) {
                    edges[node.left.val] = [];
                }
                edges[node.left.val].push(node.val);
                que.push(node.left);
            }
            if (node.right) {
                edges[node.val].push(node.right.val);
                if (!edges[node.right.val]) {
                    edges[node.right.val] = [];
                }
                edges[node.right.val].push(node.val);
                que.push(node.right);
            }
        }
        return edges;
    }

    let edge = getEdges(root);
    let seen = new Map();
    let que = [];
    que.push(target.val);
    while (k-- && que.length != 0) {
        let size = que.length;
        for (let i = 0; i < size; i++) {
            let node = que.shift();
            seen.set(String(node), 1);
            for (let adj of edge[String(node)]) {
                if (!seen.has(String(adj))) {
                    que.push(adj);
                }
            }
        }
    }
    return que;
};
