//https://leetcode.com/problems/merge-two-binary-trees/submissions/

var mergeTrees = function (root1, root2) {
    if (root1 == null && root2 == null) {
        return null;
    }
    let num = (root1 ? root1.val : 0) + (root2 ? root2.val : 0);
    let ans = new TreeNode(num);
    ans.left = mergeTrees(
        root1 == null ? null : root1.left,
        root2 == null ? null : root2.left
    );
    ans.right = mergeTrees(
        root1 == null ? null : root1.right,
        root2 == null ? null : root2.right
    );
    return ans;
};

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
