def sumOfList(lst1,lst2):
    n,m = len(lst1),len(lst2)
    i,j = 0,0
    while (i < n and j < m):
        print(lst1[i] + lst2[j], end = ", ")
        i += 1
        j += 1
    while (i < n):
        print(lst1[i],end=", ") 
        i += 1
    while ( j < m):
        print(lst2[j],end = ", ")
        j += 1  

arr1 = [1,2,3]
arr2 = [1,2,3,4,5,6,7]
sumOfList(arr1,arr2)
    