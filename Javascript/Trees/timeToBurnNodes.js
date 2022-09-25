//https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/submissions/

var amountOfTime = function (root, start) {
    let edges = makeEdges(root);
    let curr = getStart(root, start);
    let time = -1;
    let que = [String(curr)];
    let seen = new Map();
    while (que.length != 0) {
        time += 1;
        let size = que.length;
        for (let i = 0; i < size; i++) {
            let node = que.shift();
            seen.set(node, 1);
            for (let adj of edges[node]) {
                if (!seen.has(String(adj))) {
                    que.push(String(adj));
                }
            }
        }
    }
    return time;
};

function makeEdges(root) {
    let edges = {};
    let que = [root];
    while (que.length != 0) {
        let node = que.pop();
        if (!edges[node.val]) {
            edges[node.val] = [];
        }
        if (node.left) {
            if (!edges[node.left.val]) {
                edges[node.left.val] = [];
            }
            edges[node.val].push(node.left.val);
            edges[node.left.val].push(node.val);
            que.push(node.left);
        }
        if (node.right) {
            if (!edges[node.right.val]) {
                edges[node.right.val] = [];
            }
            edges[node.val].push(node.right.val);
            edges[node.right.val].push(node.val);
            que.push(node.right);
        }
    }
    return edges;
}

function getStart(root, target) {
    if (!root) return null;
    if (root.val == target) return root.val;
    return getStart(root.left, target) || getStart(root.right, target);
}
