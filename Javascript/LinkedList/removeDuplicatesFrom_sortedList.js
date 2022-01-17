//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/submissions/

var deleteDuplicates = function (head) {
    const dummy = new ListNode();
    dummy.next = head;
    let node = dummy;
    while (node.next) {
        if (node.next.next && node.next.val === node.next.next.val) {
            let nonValNode = node.next.next.next;
            while (nonValNode && nonValNode.val === node.next.val) {
                nonValNode = nonValNode.next;
            }
            node.next = nonValNode;
        } else {
            node = node.next;
        }
    }
    return dummy.next;
};

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
