//https://leetcode.com/problems/reverse-linked-list-ii/submissions/

var reverseBetween = function (head, left, right) {
    function rev(node) {
        let curr = node;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    let idx = 1;
    let curr = head;
    let part = new ListNode(0);
    let res = part;
    while (curr) {
        if (idx >= left && idx <= right) {
            part.next = new ListNode(curr.val);
            part = part.next;
        }
        curr = curr.next;
        idx++;
    }
    let revlist = rev(res.next);
    curr = head;
    idx = 1;
    while (curr) {
        if (idx >= left && idx <= right) {
            curr.val = revlist.val;
            revlist = revlist.next;
        }
        curr = curr.next;
        idx++;
    }
    return head;
};


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]