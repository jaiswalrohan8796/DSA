//https://practice.geeksforgeeks.org/problems/find-length-of-loop

var lengthOfLoop = function (head) {
    let slow = head;
    let fast = head;
    let isLoop = null;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            isLoop = true;
            break;
        }
    }
    if (isLoop) {
        let len = 1;
        slow = slow.next;
        while (slow != fast) {
            slow = slow.next;
            len++;
        }
        return len;
    } else {
        return 0;
    }
};

