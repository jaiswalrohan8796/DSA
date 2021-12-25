//https://leetcode.com/problems/palindrome-linked-list/submissions/

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

/*
Input: head = [1,2,2,1]
Output: true
 */
