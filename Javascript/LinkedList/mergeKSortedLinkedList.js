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

var mergeKLists = function (lists) {
    function mergeTwo(l1, l2) {
        let dummy = new ListNode(-1);
        let curr = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1) {
            curr.next = l1;
        }
        if (l2) {
            curr.next = l2;
        }
        return dummy.next;
    }
    if (lists.length == 0 || lists == null) return null;
    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedList.push(mergeTwo(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
};
