//https://leetcode.com/problems/palindrome-linked-list/submissions/

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
