def minDist(arr, n, x, y):
    # Code here
    min_diff = []
    xi=[]
    yi=[]
    for i in range(len(arr)):
        if (arr[i] == x):
            xi.append(i)
        if (arr[i] == y):
            yi.append(i)
    
    if ((len(xi) > 0) and (len(yi) > 0)):
        for i in xi:
            for j in yi:
                min_diff.append(abs(i-j))
    if len(min_diff) > 0:
        return min(min_diff)
    return -1