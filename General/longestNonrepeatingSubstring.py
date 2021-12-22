def lengthOfLongestSubstring(s: str) -> int:
    if len(s) == 0:
        return 0
    if (len(s) == 1):
        return 1
    ans = []
    for i in range(0,len(s)):
        for j in range(i+1,len(s)+1):
            if(len(set(s[i:j])) == len(s[i:j])):
                ans.append(s[i:j])
    print(ans)
    num = max(ans,key = len)
    return len(num)

s= "pwwkew"
result = lengthOfLongestSubstring(s)
print(result)