//https://leetcode.com/problems/linked-list-cycle-ii/submissions/

var detectCycle = function (head) {
    let isLoop = false;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            isLoop = true;
            break;
        }
    }
    if (isLoop) {
        let start = head;
        while (start != slow) {
            start = start.next;
            slow = slow.next;
        }
        return start;
    }
    return null;
};

//Intuition
//Floyd Cycle detection algo merely just detects the loop in list & not at which tail it occurs.
//We'll be using the point at which cycle is detected
//traverse start pointer from head & slow pointer from cycle detect point (increment both sequentially) till we get both equal. Thats our cycle point.
