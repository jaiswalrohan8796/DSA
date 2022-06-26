//https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list

var detectAndRemove = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;
    let flag;
    while (fast && fast.next) {
        prev = fast;
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            flag = true;
            break;
        }
    }
    if (flag) {
        slow = head;
        if (slow == fast) {
            prev.next.next = null;
            return;
        }
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        fast.next = null;
    }
};
