//https://leetcode.com/problems/linked-list-components/submissions/

var numComponents = function (head, nums) {
    let conn = new Map();
    let curr = head;
    while (curr.next) {
        conn.set(curr.val, curr.next.val);
        curr = curr.next;
    }
    let nn = new Map();
    for (let c of nums) {
        nn.set(c, 1);
    }
    let count = nums.length;
    for (let n of nums) {
        if (conn.has(n) && nn.has(conn.get(n))) {
            count--;
        }
    }
    return count;
};


//Intuition
//Store the connected nodes in Map
//let initially the count of components be length of nums
//Iterate over nums & find the connected component, & if its also in nums => decrement count
//return count