//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/

var deleteMiddle = function (head) {
    if (!head) return head;
    if (!head.next) return null;
    if (!head.next.next) {
        head.next = null;
        return head;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.val = slow.next.val;
    slow.next = slow.next.next;
    return head;
};

// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
