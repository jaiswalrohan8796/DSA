//leetcode.com/problems/sort-list/

https: var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let fast = head.next;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const mid = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(mid);
    const dummy = new ListNode(0);
    let h = dummy;
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    if (left) {
        h.next = left;
    }
    if (right) {
        h.next = right;
    }
    return dummy.next;
};

