//https://leetcode.com/problems/insertion-sort-list/submissions/

var insertionSortList = function (head) {
    let end = null;
    while (end != head.next) {
        let alpha = head;
        while (alpha.next != end) {
            let beta = alpha.next;
            if (alpha.val > beta.val) {
                [alpha.val, beta.val] = [beta.val, alpha.val];
            }
            alpha = alpha.next;
        }
        end = alpha;
    }
    return head;
};


