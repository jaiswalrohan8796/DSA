//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/

var flatten = function(head) {
    if(!head) return null
    let l = []
    function traverse(node) {
        if(node) {
            //get self val
            l.push(node.val)
            //get child value
            traverse(node.child)
            //get next values
            traverse(node.next)
        }
    }
    traverse(head)
    head = new Node(l.shift(),null,null)
    let ans = head
    for(let n of l) {
        let newNode = new Node(n)
        let temp = head
        while(temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
        newNode.prev = temp
    }
    return ans
};


// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
