//https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list

var nthNode = function (head, n) {
    let slow = head;
    let fast = head;
    while (n && fast) {
        fast = fast.next;
        n -= 1;
    }
    if (n > 0) return -1;
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow.data;
};

// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output: 8
// Explanation: In the first example, there
// are 9 nodes in linked list and we need
// to find 2nd node from end. 2nd node
// from end os 8.
