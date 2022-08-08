//https://leetcode.com/problems/add-two-numbers/submissions/

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let sum = 0;
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        curr.next = new ListNode(Math.floor(sum % 10));
        curr = curr.next;
        sum = Math.floor(sum / 10);
    }
    if (sum != 0) {
        curr.next = new ListNode(sum);
    }
    return dummy.next;
};

//Intuition :
//Number are given in reverse order but we can sum up that in the given order by summing up the every nodes. To manager carry, sum up  sum % 10 & carry sum integer division by 10
/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */
