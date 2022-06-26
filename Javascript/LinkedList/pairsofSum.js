//https://practice.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x

var countPairsofSumX = function (head1, head2, x) {
    let set = new Set();
    let curr1 = head1;
    while (curr1) {
        set.add(x - curr1.data);
        curr1 = curr1.next;
    }
    let count = 0;
    let curr2 = head2;
    while (curr2) {
        if (set.has(curr2.data)) count++;
        curr2 = curr2.next;
    }
    return count;
};


