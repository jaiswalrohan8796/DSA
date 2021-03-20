def count_x(self, head, search_for):
    # Code here
    p = head
    count = 0
    while p is not None:
        if p.data == search_for:
            count += 1
        p = p.next
    return count