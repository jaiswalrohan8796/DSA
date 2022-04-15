//https://leetcode.com/problems/trim-a-binary-search-tree/submissions/

var trimBST = function (root, low, high) {
    function dfs(node) {
        if (node == null) return null;
        if (node.val < low) {
            return dfs(node.right);
        } else if (node.val > high) {
            return dfs(node.left);
        } else {
            node.left = dfs(node.left);
            node.right = dfs(node.right);
            return node;
        }
    }
    return dfs(root);
};


// Input: root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]

//Intuition
// This problem becomes easy when you understand the logic behind trimming.

// If we have value in node higher than high, then we need to cut this node and its right children (because it is BST), so we just return dfs(node.left).
// Similarly if value is less than low, we return dfs(node.right).
// Finally, if it is in between, we need to attach dfs(node.left) as left children and dfs(node.right) as right children and return our node, exactly this is meant by phrase