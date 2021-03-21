def balancedParenthesis(s):
    stack = []
    opening = ["(","{","["]
    for char in s:
        if char in opening:
            stack.append(char)
        else:
            if not stack:
                return False
            curr_char = stack.pop()
            if (curr_char == "("):
                if (char != ')'):
                    return False
            if (curr_char == "{"):
                if (char != '}'):
                    return False
            if (curr_char == "["):
                if (char != ']'):
                    return False
    if stack: 
        return False
    return True


res = balancedParenthesis("[({[([{}])]})}")
print(res)