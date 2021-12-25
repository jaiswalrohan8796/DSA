//https://leetcode.com/problems/reverse-linked-list/submissions/

var reverseList = function(head) {
    let prev = null
    let p = head
    while(p) {
        let next = p.next
        p.next = prev
        prev = p
        p = next
    }
    head = prev
    return head
};

