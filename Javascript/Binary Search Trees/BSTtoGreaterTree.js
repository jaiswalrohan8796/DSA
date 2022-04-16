//https://leetcode.com/problems/convert-bst-to-greater-tree/submissions/

var convertBST = function (root) {
    let sum = 0;
    convert(root);
    return root;

    function convert(curr) {
        if (curr == null) return;
        convert(curr.right);
        curr.val += sum;
        sum = curr.val;
        convert(curr.left);
    }
};

// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

//Intuition
//Do a reverse inorder traversal while accumulating the sum (right => data => left)
