//https://leetcode.com/problems/sum-root-to-leaf-numbers/submissions/

var sumNumbers = function (root) {
    let ans = [];
    function sumN(root, str) {
        if (!root) {
            return null;
        }
        str += String(root.val);
        if (root.left) {
            sumN(root.left, str);
        }
        if (root.right) {
            sumN(root.right, str);
        }
        if (root.left == null && root.right == null) {
            ans.push(str);
        }
    }
    sumN(root, "");
    let result = 0;
    ans.forEach((str) => {
        let num = Number(str);
        result += num;
    });
    return result;
};

// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.
