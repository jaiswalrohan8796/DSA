s = input()
res = []
for i in range(len(s)-1):
    temp = s[i:i+2]
    if temp not in res:
        res.append(temp)
print(res)
print(len(res))