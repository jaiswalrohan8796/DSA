//https://leetcode.com/problems/odd-even-linked-list/submissions/

function oddEvenList(head) {
    if (!head) return head;

    var odd = head;
    var even = head.next;
    while (odd.next && odd.next.next) {
        var tmp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        tmp.next = odd.next;
    }
    odd.next = even;
    return head;
}

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
