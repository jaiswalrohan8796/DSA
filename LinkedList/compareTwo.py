def compare(head1, head2):
    res1 = ''
    res2 = ''
    while head1 is not None:
        res1 += head1.data
        head1 = head1.next
    while head2 is not None:
        res2 += head2.data
        head2 = head2.next
    if (res1 == res2):
        return 0
    if (res1 >res2):
        return 1
    if (res1 < res2):
        return -1