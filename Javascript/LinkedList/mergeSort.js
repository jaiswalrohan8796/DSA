//https://leetcode.com/problems/sort-list/

//TLE : Maximum Call Stack Limit
var sortList = function (head) {
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

//Accepted

function merge(root, l1, l2) {
    let res = root;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            res.next = l1;
            l1 = l1.next;
        } else {
            res.next = l2;
            l2 = l2.next;
        }
        res = res.next;
    }
    if (l1) {
        res.next = l1;
    }
    if (l2) {
        res.next = l2;
    }
    return root.next;
}
function split(node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const left = node;
    const right = slow.next;
    slow.next = null;
    return [left, right];
}
var sortList = function (head) {
    if (!head || head.next == null) return head;

    const [left, right] = split(head);
    let root = new ListNode(-1);
    return merge(root, sortList(left), sortList(right));
};
