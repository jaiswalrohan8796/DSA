//https://leetcode.com/problems/merge-k-sorted-lists/

var mergeKLists = function (lists) {
    // Naive Way O((N + k)^2)
    let k = lists.length;
    let merge = new ListNode(-1);
    let curr = merge;
    let arr = [];
    for (let i = 0; i < k; i++) {
        while (lists[i]) {
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    arr.sort((a, b) => b - a);
    while (arr.length != 0) {
        curr.next = new ListNode(arr.pop());
        curr = curr.next;
    }
    return merge.next;
};

//O(N^2) :- We know how to merge 2 sorted list in O(N) time, so untill there's only one item left in list , take two lists sorted it & append to list. The take sorted & next item & repeat. It will need (N-1) * O(N) operations.

//O(Nlog(K)) :- Use merge sort algorithm

function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let temp = dummy;
     while (a !== null && b !== null) {
         if (a.val < b.val) {
             temp.next = a;
             a = a.next;
         } else {
             temp.next = b;
             b = b.next;
         }
         temp = temp.next;
     }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }
    // two two
    // priority queue
    while (lists.length > 1) {
        let a = lists.shift(); // the head will contains the "less" length list
        let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};
