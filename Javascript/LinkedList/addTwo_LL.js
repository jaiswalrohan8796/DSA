//https://leetcode.com/problems/add-two-numbers/submissions/

var addTwoNumbers = function (l1, l2) {
    let num1 = [];
    let curr1 = l1;
    while (curr1) {
        num1.push(curr1.val);
        curr1 = curr1.next;
    }
    let num2 = [];
    let curr2 = l2;
    while (curr2) {
        num2.push(curr2.val);
        curr2 = curr2.next;
    }
    [num1, num2] = [num1.reverse(), num2.reverse()];
    num1 = BigInt(num1.join(""));
    num2 = BigInt(num2.join(""));
    let ans = String(num1 + num2);
    ans = ans.split("").reverse();
    var llst = new ListNode(0);
    let temp = llst;
    while (ans.length) {
        llst.next = new ListNode(ans.splice(0, 1));
        llst = llst.next;
    }
    return temp.next;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.