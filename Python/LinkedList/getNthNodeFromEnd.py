   
def getNthFromLast(head,n):
    #code here
    length = countNodes(head)
    if (length < n):
        return -1
    p = head
    pos = (length - n) + 1
    while pos > 1:
        p = p.next
        pos-=1
    return p.data

def countNodes(head):
    count = 0
    p = head
    while p is not None:
        count+=1
        p = p.next
    return count