//Rotate Right
//https://leetcode.com/problems/rotate-list/submissions/

var rotateRight = function (head, k) {
    if (head == null || head.next == null) {
        return head;
    }
    while (k--) {
        let curr = head;
        while (curr.next.next) {
            curr = curr.next;
        }
        let temp = curr.next;
        curr.next = null;
        temp.next = head;
        head = temp;
    }
    return head;
};

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

//Rotate Left
//https://practice.geeksforgeeks.org/problems/rotate-a-linked-list

var rotateLeft = function (head) {
    let rest = null;
    let curr = head;
    let i = 1;
    while (curr && i < k) {
        curr = curr.next;
        i++;
    }
    rest = curr.next;
    curr.next = null;
    let ans = rest;
    if (!rest) return head;
    while (rest.next) {
        rest = rest.next;
    }
    rest.next = head;
    return ans;
};

//If k is given too high as compared to length of list , then do modulus of k by length.

var rotateRight = function(head, k) {
    //annoying edge cases
    if(!head || !head.next) return head
    //find length
    let len = 0
    let curr = head
    while(curr) {
        curr = curr.next
        len += 1
    }
    if (len == k) return head // if len == len of list return as it is
    if(k > len) {
        k = Math.floor(k % len) // find how much times to rotate actually
    }
    for(let i = 0; i < k; i++) {
        let curr = head
        while(curr.next && curr.next.next) {
            curr = curr.next
        }
        let end = curr.next
        curr.next = null
        end.next = head
        head = end
    }
    return head
};


// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
