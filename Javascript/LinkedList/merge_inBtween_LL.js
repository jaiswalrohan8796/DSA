//https://leetcode.com/problems/merge-in-between-linked-lists/submissions/

var mergeInBetween = function (list1, a, b, list2) {
    let curr2 = list2;
    while (curr2.next) {
        curr2 = curr2.next;
    }
    let curr1 = list1;
    let c2 = 0;
    while (curr1 && c2 != b) {
        c2++;
        curr1 = curr1.next;
    }
    curr2.next = curr1.next;

    let p = list1;
    let c1 = 0;
    while (p && c1 != a - 1) {
        c1++;
        p = p.next;
    }
    p.next = list2;
    return list1;
};

// Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [0,1,2,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
