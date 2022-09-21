function bottomView(root) {
    let map = new Map();
    let que = [[root, 0]];
    while (que.length != 0) {
        let [node, x] = que.shift();
        map.set(x, node.data);
        if (node.left) {
            que.push([node.left, x - 1]);
        }
        if (node.right) {
            que.push([node.right, x + 1]);
        }
    }
    let ans = [];
    for (let [key, val] of [...map].sort(([a1, b1], [a2, b2]) => a1 - a2)) {
        ans.push(val);
    }
    return ans;
}
