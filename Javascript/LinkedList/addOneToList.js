//https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list

var addOne = function (node0) {
    function reverse(head) {
        let prev = null;
        let curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    let head = reverse(node);
    let curr = head;
    let carry = 1;
    let prev = null;
    while (curr) {
        curr.data = curr.data + carry;
        carry = Math.floor(curr.data / 10);
        curr.data = curr.data % 10;
        prev = curr;
        curr = curr.next;
    }
    if (carry != 0) {
        let newNode = new Node(carry);
        prev.next = newNode;
    }
    return reverse(head);
};

//Intuition
//Reverse the list & traverse and keep adding one to current until there is a carry.
