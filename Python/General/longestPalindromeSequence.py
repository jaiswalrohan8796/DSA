def longestPalindrome(self, s: str) -> str:
    if len(s) == 1:
        return s
    maxm = ""
    for i in range(len(s)):
        for j in range(i,len(s)):
            lst = list(s[i:j+1])
            if(lst[:] == lst[::-1]):
                if (len(maxm) < len(s[i:j+1])):
                    maxm = s[i:j+1]
    return maxm