//https://leetcode.com/problems/swapping-nodes-in-a-linked-list/submissions/

var swapNodes = function(head, k) {
    let len = 0
    let elems = []
    let curr = head
    while(curr) {
        len++
        elems.push(curr.val)
        curr = curr.next
    }
    console.log(elems,len)
    console.log(elems[k-1],elems[len - k])
    curr = head
    let i = 0
    while(curr) {
        if( i == (k - 1)) {
            curr.val = elems[len - k]
        }
        else if(i == (len - k)) {
            curr.val = elems[k - 1]
        }
        curr = curr.next
        i++
    }
    return head
};

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
