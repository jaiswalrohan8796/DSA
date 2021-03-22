def isValid(self, s: str) -> bool:
    a=[]
    d={ ')':'(' , ']':'[' , '}':'{' }
    b='([{'
    for i in s:
        if i in b:
            a.append(i)
        else:
            if a and a[-1]==d[i]:
                a.pop()
            else:
                return False
    if a:
        return False
    return True