def removeDuplicates(self, head):
    # code here
    if (head is None or head.next is None):
        return head       
    # Hash to store seen values 
    hash = set()  
    p = head
    hash.add(head.data)
    while p.next is not None:
        if p.next.data in hash:
            p.next = p.next.next
        else:
            hash.add(p.next.data)
            p = p.next

    return head