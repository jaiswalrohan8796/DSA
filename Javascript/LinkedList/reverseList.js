//https://leetcode.com/problems/reverse-linked-list/submissions/

var reverseList = function (head) {
    let prev = null;
    let p = head;
    while (p) {
        let next = p.next;
        p.next = prev;
        prev = p;
        p = next;
    }
    head = prev;
    return head;
};

var reverseList = function (head) {
    let [prev, current] = [null, head];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
};

//recursive reverse
function revRecur(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newH = revRecur(head.next);
    head.next.next = head;
    head.next = null;
    return newH;
}
