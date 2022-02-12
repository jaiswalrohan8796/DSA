//https://leetcode.com/problems/reorder-list/

var reorderList = function (head) {
    if (head == null) {
        return null;
    }
    let stack = [];
    let node = head;
    while (node) {
        stack.push(node);
        node = node.next;
    }

    node = head;
    const size = stack.length;
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            node.next = stack.shift();
        } else {
            node.next = stack.pop();
        }
        node = node.next;
    }
    node.next = null;
    return head;
};

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
