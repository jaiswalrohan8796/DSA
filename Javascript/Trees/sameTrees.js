//https://leetcode.com/problems/same-tree/submissions/

var isSameTree = function (p, q) {
    let pList = [];
    let qList = [];
    function preOrderp(root) {
        if (root) {
            pList.push(root.val);
            preOrderp(root.left);
            preOrderp(root.right);
        } else {
            pList.push(null);
        }
    }
    preOrderp(p);
    function preOrderq(root) {
        if (root) {
            qList.push(root.val);
            preOrderq(root.left);
            preOrderq(root.right);
        } else {
            qList.push(null);
        }
    }
    preOrderq(q);
    console.log(pList, qList);
    let flag = true;
    for (let i = 0; i < pList.length; i++) {
        if (pList[i] != qList[i]) {
            flag = false;
            break;
        }
    }
    return flag;
};

// Input: p = [1,2], q = [1,null,2]
// Output: false
