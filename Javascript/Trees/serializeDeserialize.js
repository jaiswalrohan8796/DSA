//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/

var serialize = function (root) {
    if (!root) return "";
    let s = "";
    let que = [root];
    while (que.length != 0) {
        let node = que.shift();
        if (node == null) {
            s = s.concat("#,");
            continue;
        } else {
            s = s.concat(node.val + ",");
            que.push(node.left);
            que.push(node.right);
        }
    }
    return s;
};

var deserialize = function (data) {
    if (data == "") return null;
    let arr = data.split(",");
    let root = new TreeNode(parseInt(arr.shift()));
    let que = [root];
    while (que.length != 0) {
        let node = que.shift();
        let char = arr.shift();
        if (char == "#") {
            node.left = null;
        } else {
            let leftNode = new TreeNode(parseInt(char));
            node.left = leftNode;
            que.push(leftNode);
        }
        let char2 = arr.shift();
        if (char2 == "#") {
            node.right = null;
        } else {
            let rightNode = new TreeNode(parseInt(char2));
            node.right = rightNode;
            que.push(rightNode);
        }
    }
    return root;
};
