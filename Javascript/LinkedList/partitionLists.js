//https://leetcode.com/problems/partition-list/submissions/

var partition = function (head, x) {
    let first = new ListNode(0);
    let f = first;
    let second = new ListNode(0);
    let s = second;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            first.next = new ListNode(curr.val);
            first = first.next;
        } else {
            second.next = new ListNode(curr.val);
            second = second.next;
        }
        curr = curr.next;
    }
    first.next = s.next;
    return f.next;
};


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]