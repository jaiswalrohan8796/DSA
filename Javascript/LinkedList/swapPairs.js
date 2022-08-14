//https://leetcode.com/problems/swap-nodes-in-pairs/submissions/

//Intution is to add a dummy pointer at beginning.

var swapPairs = function (head) {
    if (head == null || head.next == null) return head;
    let v1 = head;
    let v2 = head.next;
    let v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};

//swap pairs by swapping links
var swapPairs = function (head) {
    if (head == null || head.next == null) return head;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let curr = dummy;

    while (curr.next && curr.next.next) {
        let first = curr.next;
        let sec = curr.next.next;
        curr.next = sec;
        first.next = sec.next;
        sec.next = first;
        curr = curr.next.next;
    }
    return dummy.next;
};

//https://practice.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data
var swapPairs = function (node) {
    let curr = node;
    while (curr && curr.next) {
        let first = curr;
        let second = curr.next;
        let temp = first.data;
        first.data = second.data;
        second.data = temp;
        curr = curr.next.next;
    }
    return node;
};

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
