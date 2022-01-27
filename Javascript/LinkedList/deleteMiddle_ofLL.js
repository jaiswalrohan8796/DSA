//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/

var deleteMiddle = function (head) {
    if (head == null || head.next == null) return null;
    let len = 0;
    let p = head;
    while (p) {
        len++;
        p = p.next;
    }
    let mid;
    if (len % 2 == 0) {
        mid = len / 2;
    } else {
        mid = Math.floor(len / 2);
    }
    let curr = head;
    let i = 0;
    while (curr && i != mid - 1) {
        curr = curr.next;
        i++;
    }
    curr.next = curr.next.next;
    return head;
};

// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
