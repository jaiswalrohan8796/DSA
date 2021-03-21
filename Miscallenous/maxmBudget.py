lst = list(map(int,input().split()))
b = lst[0]
n = lst[1]
m = lst[2]
keyboards = list(map(int,input().split()))
usb = list(map(int,input().split()))

maxm = 0
count = 0
for i in keyboards:
    for j in usb:
        if ((i + j) <= b):
            if ((i + j)) > maxm:
                count+=1
                maxm = i + j
print(maxm)
print(count)
