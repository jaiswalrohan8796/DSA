def compute_palindrome(head): 
    #return True/False
    res = ''
    p = head
    while p is not None:
        res += p.data
        p = p.next
    return res == res[::-1]