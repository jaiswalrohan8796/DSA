    def addOne(self,head):
        res = ''
        p = head
        while p is not None:
            res = res + str(p.data)
            p = p.next
        res.lstrip('0')
        res = int(res) + 1
        head.data = res
        head.next = None
        return head
        