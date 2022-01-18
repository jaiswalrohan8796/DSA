//https://leetcode.com/problems/add-two-numbers-ii/submissions/

var addTwoNumbers = function(l1, l2) {
    let list1 = ""
    let list2 = ""
    while(l1) {
        list1 = list1 + String(l1.val)
        l1 = l1.next
    }
    while(l2) {
        list2 += String(l2.val)
        l2 = l2.next
    }
    let ans = String(BigInt(list1) + BigInt(list2))
    ans = ans.split("")
    let result = new ListNode(ans[0])
    ans.splice(0,1)
    let resultHead = result
    while(ans.length) {
        let temp = new ListNode(ans[0])
        result.next = temp
        result = result.next
        ans.splice(0,1)
    }
    return resultHead
};

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]