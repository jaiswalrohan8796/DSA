def decrypt(self, code: List[int], k: int) -> List[int]:
    if k==0: return [0 for i in code]
    temp = code
    code = code*2
    for i in range(len(temp)):
        if k>0:
            temp[i] = sum(code[i+1:i+k+1])
        else:
            temp[i] = sum(code[i+len(temp)+k:i+len(temp)])
    return temp