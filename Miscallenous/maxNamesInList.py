def winner(self,arr,n):
    # Your code here
    c=Counter(arr)
    print(c)
    maxc=max(c.values())
    print(maxc)
    arr=[]
    for k,v in c.items():
        
        if v==maxc:
            count=v
            arr.append(k)
    print(sorted(arr))
    return sorted(arr)[0],count