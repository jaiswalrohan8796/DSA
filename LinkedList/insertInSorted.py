    def sortedInsert(self, head1,key):
        # code here
        if head1 == None:
            temp = Node(key)
            temp.next = head1.next
            head1.next = temp
        if (head1.data >= key):
            temp = Node(key)
            temp.next = head1
            head1 = temp
        else:
            p = head1
            while (p.next is not None and p.next.data < key):
                p = p.next
            temp  = Node(key)
            temp.next = p.next
            p.next = temp
        return head1
            
        