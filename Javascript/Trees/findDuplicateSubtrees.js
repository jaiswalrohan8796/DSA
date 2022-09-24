//var findDuplicateSubtrees = function(root) {

var findDuplicateSubtrees = function (root) {
    const map = new Map(),
        res = [];
    dfs(root, map, res);
    return res;
};

function dfs(root, map, res) {
    if (!root) return "#";
    const subtree = `${root.val}.${dfs(root.left, map, res)}.${dfs(
        root.right,
        map,
        res
    )}`;
    map.set(subtree, (map.get(subtree) || 0) + 1);
    if (map.get(subtree) === 2) {
        res.push(root);
    }
    return subtree;
}
