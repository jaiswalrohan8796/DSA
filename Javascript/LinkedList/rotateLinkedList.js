//https://leetcode.com/problems/rotate-list/submissions/

var rotateRight = function (head, k) {
    if (head == null || head.next == null) {
        return head;
    }
    while (k--) {
        let curr = head;
        while (curr.next.next) {
            curr = curr.next;
        }
        let temp = curr.next;
        curr.next = null;
        temp.next = head;
        head = temp;
    }
    return head;
};

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
