def union(head1,head2): #TLE aya tha isme
    # code here
    if (head1 == None or head2 == None):
        return head1 or head2
    temp = linkedList()
    p1 = head1
    p2 = head2
    hash = set()   
    while (p1 is not None and p2 is not None):
        if (p1.data < p2.data):
            if p1.data not in hash:
                hash.add(p1.data)
                temp.insert(p1.data)
                p1 = p1.next
        else:
            if p2.data not in hash:
                hash.add(p2.data)
                temp.insert(p2.data)
                p2 = p2.next
    while (p1 is not None):
        if (p1.data not in hash):
            hash.add(p1.data)
            temp.insert(p1.data)
        p1 = p1.next
    while (p2 is not None):
        if (p2.data not in hash):
            hash.add(p2.data)
            temp.insert(p2.data)
        p2 = p2.next
    return temp.head