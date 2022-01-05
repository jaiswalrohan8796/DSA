def rotateArr(self,A,D,N):
    newarr = A[:D]
    for i in range(D):
        A.remove(A[0])
    A.extend(newarr)
    return A