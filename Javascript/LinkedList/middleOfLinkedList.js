//https://leetcode.com/problems/middle-of-the-linked-list/submissions/

var middleNode = function (head) {
    let len = 0;
    let p = head;
    while (head) {
        len++;
        head = head.next;
    }
    let mid = Math.floor(len / 2);
    let idx = 0;
    while (idx != mid) {
        idx++;
        p = p.next;
    }
    return p;
};

//Two pointer approach
var middleNode2 = function (head) {
    let slow = node;
    let fast = node;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
};

/*
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3. */
