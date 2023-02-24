//https://leetcode.com/problems/palindrome-linked-list/submissions/

//traverse to the middle with reversing the elements & start comparing with next half.

var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let slow = head
    let fast = head
    let prev = null
    while(fast && fast.next) {
        fast = fast.next.next
        let tmp = slow.next
        slow.next = prev
        prev = slow
        slow = tmp
    }
    //if midd is at odd posiotion move on ahead.
    slow = fast ? slow.next : slow
    while(slow) {
        if(slow.val != prev.val) return false
        else {
            slow = slow.next
            prev = prev.next
        }
    }
    return true
};

