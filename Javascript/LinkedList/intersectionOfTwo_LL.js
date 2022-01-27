//https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

var getIntersectionNode = function (headA, headB) {
    if (headA == headB) return headA;
    let currA = headA;
    while (currA) {
        currB = headB;
        while (currB) {
            if (currA == currB) {
                return currA;
            }
            currB = currB.next;
        }
        currA = currA.next;
    }
    return null;
};

//return the node of intersection
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
