//https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

var removeNthFromEnd = function (head, n) {
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    let k = len - n;
    if (k == 0) {
        head = head.next;
        return head;
    }
    let pos = 1;
    let p = head;
    while (pos < k && p.next != null) {
        p = p.next;
        pos++;
    }
    if (p == null || p.next == null) {
        return head;
    } else {
        let temp = p.next.next;
        p.next = temp;
        return head;
    }
};

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
