    def sortList(head):
        end = None
        while end != head.next:
            p = head
            while p.next != end:
                q = p.next
                if (p.data > q.data):
                    p.data,q.data = q.data,p.data
                p = p.next
            end = p