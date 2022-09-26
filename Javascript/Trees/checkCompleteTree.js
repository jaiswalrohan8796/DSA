//https://leetcode.com/problems/check-completeness-of-a-binary-tree/submissions/

var isCompleteTree = function (root) {
    let que = [root];
    let end = false;
    while (que.length != 0) {
        let node = que.shift();
        if (node == null) {
            end = true;
        } else {
            if (end == true) return false;
            que.push(node.left);
            que.push(node.right);
        }
    }
    return true;
};

//Intuition is to check the last level should be all left nodes. If encountered a right node after null, return false.

function kite(hello) {
    console.log(process)
}

kite("Hii");
