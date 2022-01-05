def remove_duplicate(A):
    # code here
    res = []
    for i in A:
        if i not in res:
            res.append(i)
        else:
            A.remove(i)
    print(res)
    print(res == A)
    return len(A)

arr = list(map(int,input().split()))
num = remove_duplicate(arr)
for i in range(num):
    print(arr[i],end = " ")