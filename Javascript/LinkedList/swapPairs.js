//https://leetcode.com/problems/swap-nodes-in-pairs/submissions/

var swapPairs = function (head) {
    if (head == null || head.next == null) return head;
    let v1 = head;
    let v2 = head.next;
    let v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
