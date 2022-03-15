//https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/

var searchBST = function (root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (val < root.val) return searchBST(root.left, val);
    if (val > root.val) return searchBST(root.right, val);
};

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
