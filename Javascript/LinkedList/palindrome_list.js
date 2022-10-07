//https://leetcode.com/problems/palindrome-linked-list/submissions/

//Reverse the second half & compare

var isPalindrome = function (head) {
    //Base Case
    if (!head || !head.next) return true;
    let curr = head;
    //get middle
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse from middle & get new head
    let mid = rev(slow);
    //compare both the list
    while (mid) {
        if (mid.val != curr.val) return false;
        mid = mid.next;
        curr = curr.next;
    }
    return true;
};

function rev(head) {
    if (!head || !head.next) return head;
    let newH = rev(head.next);
    head.next.next = head;
    head.next = null;
    return newH;
}

//Naive approach
var isPalindrome = function (head) {
    let ans = [];
    let p = head;
    while (p) {
        ans.push(p.val);
        p = p.next;
    }
    let rev = [...ans].reverse();
    return ans.join("") == rev.join("");
};

//Better approach
var isPalindrome = function (head) {
    if (!head || head.next == null) return true;
    let stack = [];
    let curr = head;
    while (curr) {
        stack.push(curr.val);
        curr = curr.next;
    }

    while (head) {
        if (head.val != stack.pop()) return false;
        head = head.next;
    }
    return true;
};

//O(N) && O(S) = 1
var isPalindrome = function (head) {
    let slow = head,
        fast = head,
        prev,
        temp;
    while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
    (prev = slow), (slow = slow.next), (prev.next = null);
    while (slow)
        (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
    (fast = head), (slow = prev);
    while (slow)
        if (fast.val !== slow.val) return false;
        else (fast = fast.next), (slow = slow.next);
    return true;
};
