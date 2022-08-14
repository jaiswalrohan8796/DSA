//https://leetcode.com/problems/copy-list-with-random-pointer/

// HashMaps makes life easier :)

var copyRandomList = function (head) {
    let oldToNew = new Map();
    //set null, incase of null pointers
    oldToNew.set(null, null);
    //create a copy of all the nodes & map old with new
    let curr = head;
    while (curr) {
        let copy = new Node(curr.val);
        oldToNew.set(curr, copy);
        curr = curr.next;
    }
    //now assign pointers(next & random) by using the mapping
    curr = head;
    while (curr) {
        let copy = oldToNew.get(curr);
        copy.next = oldToNew.get(curr.next);
        copy.random = oldToNew.get(curr.random);
        curr = curr.next;
    }
    return oldToNew.get(head);
};
