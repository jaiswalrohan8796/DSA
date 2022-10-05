//https://practice.geeksforgeeks.org/problems/sorted-list-to-bst

class Solution {
    sortedListToBST(head) {
        //code here
        function findMiddle(head) {
            let slow = head;
            let fast = head;
            let prev = head;
            while (fast && fast.next) {
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }
            return prev;
        }
        function make(head) {
            if (!head) return null;
            if (head.next == null) return new TNode(head.data);
            let mid = findMiddle(head);
            let root = new TNode(mid.next.data);
            let right = mid.next.next;
            mid.next = null;
            root.left = make(head);
            root.right = make(right);
            return root;
        }
        return make(head);
    }
}
