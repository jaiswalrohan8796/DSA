//https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/

var deleteDuplicates = function (head) {
    var current = head;

    while (current) {
        if (current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
