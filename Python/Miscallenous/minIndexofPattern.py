def minIndexChar(self,str, pat): 
    minIndex = 10**9
    m =len(str) 
    n =len(pat) 
    for i in range(n): 
        for j in range(m): 
            if (pat[i] == str[j] and j < minIndex): 
                minIndex = j 
                break
    if (minIndex != 10**9): 
        return minIndex
    else: 
        return -1 