//https://leetcode.com/problems/next-greater-node-in-linked-list/submissions/

var nextLargerNodes = function (head) {
    let ans = [];
    if (head == null) {
        return [];
    }
    let curr = head;
    while (curr.next) {
        let data = curr.val;
        let temp = data;
        let p = curr.next;
        while (p) {
            if (p.val > data) {
                data = p.val;
                break;
            }
            p = p.next;
        }
        if (temp == data) {
            ans.push(0);
        } else {
            ans.push(data);
        }
        curr = curr.next;
    }
    ans.push(0);
    return ans;
};

// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]
