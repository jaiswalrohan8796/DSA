//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/

var getDecimalValue = function (head) {
    let str = "";
    let curr = head;
    while (curr) {
        str += String(curr.val);
        curr = curr.next;
    }
    let num = parseInt(str, 2);
    return num;
};

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
