def longestCommonPrefix(self, strs: List[str]) -> str:
    if len(strs) == 0:
        return ""
    if len(strs) == 1:
        return strs[0]
    # set prefix as the first element in the list
    prefix = strs[0]
    prefix_length = len(prefix)
    # iterate and modify the prefix as per the element in the list
    for i in strs[1:]:
        while prefix!=i[0:prefix_length]:
            prefix = prefix[0:prefix_length-1]
            prefix_length = prefix_length-1
            
            if len(prefix) == 0:
                return ""
    return prefix