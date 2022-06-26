//https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it

var sortZerosOnesTwos = function (head) {
    let curr = head;
    let zeros = 0;
    let ones = 0;
    let twos = 0;
    while (curr) {
        if (curr.data == 0) zeros++;
        else if (curr.data == 1) ones++;
        else twos++;
        curr = curr.next;
    }
    let p = head;
    while (p) {
        while (zeros != 0) {
            p.data = 0;
            p = p.next;
            zeros--;
        }
        while (ones != 0) {
            p.data = 1;
            p = p.next;
            ones--;
        }
        while (twos != 0) {
            p.data = 2;
            p = p.next;
            twos--;
        }
    }
    return head;
};
