//https://leetcode.com/problems/remove-linked-list-elements/submissions/

var removeElements = function (head, val) {
    if (!head) return null;
    //remove recurring heads
    while (head) {
        if (head.val == val) {
            head = head.next;
        } else {
            break;
        }
    }
    //remove other elements
    let curr = head;
    while (curr && curr.next) {
        if (curr.next.val == val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// Input: head = [7,7,7,7], val = 7
// Output: []
