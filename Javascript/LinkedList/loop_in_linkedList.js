//Loop in a linked list occurs when a node is visited twice in list.

//How to find a cycle in Linked List

// Solution 1 : Loop through each node and mark as visited, if a node is found already marked => cycle found

//Solution 2 : Hare & Tortoise Algorithm : Two pointers a slow(moves one step) and a fast (moves two step) will eventually meet if there is a loop in the list.

function hasCycle(head) {
    if(!head || head.next == null) {
        return false
    }
    else {
        let slow = head
        let fast = head
        while(fast != null || fast.next != null) {
            slow = slow.next
            fast = fast.next.next
            if(slow == fast) {
                //cycle point found at node:slow
                return true
            }
        }
        return false
    }
}