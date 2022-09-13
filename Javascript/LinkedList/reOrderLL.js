//https://leetcode.com/problems/reorder-list/

var reorderList = function (head) {
    if (head == null || head.next == null) return head;
    //find mid
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse next half
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    slow.next = null;
    //pick from 1 -> 2 -> 1 -> 2...
    let head1 = head;
    let head2 = prev;
    while (head1 && head2) {
        let nxt1 = head1.next;
        let nxt2 = head2.next;
        //pick from 2
        head1.next = head2;
        //update 1
        head1 = nxt1;
        //pick from 1
        head2.next = head1;
        //update 2
        head2 = nxt2;
    }
};

//3-step process
//find middle
//reverse right half
//switch connections alternatively 1 -> 2 -> 1 -> 2...

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
