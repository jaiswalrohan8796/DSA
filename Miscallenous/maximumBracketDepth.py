def maxDepth(s):
    curr_max = 0
    max = 0
    for i in s:
        if i =="(":
            curr_max += 1
            if curr_max > max:
                max = curr_max
        elif i ==")":
            if curr_max > 0:
                curr_max -= 1 
            else:
                return -1 
    if curr_max != 0:
        return -1 
    else:
        return max

res = maxDepth("(((x))(((y))))")
print(res)