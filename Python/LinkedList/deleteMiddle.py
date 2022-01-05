def deleteMid(head):
    '''
    head:  head of given linkedList
    return: head of resultant llist
    '''
    if (head == None):
        return head
    if (head.next == None):
        del head
        return None
    copyhead = head
    count = countNode(head)
    mid = count//2
    while mid > 1:
        head = head.next
        mid -= 1
    head.next = head.next.next
    return copyhead
    
    #code here
def countNode(head):
    count = 0
    while head is not None:
        count += 1
        head = head.next
    return count