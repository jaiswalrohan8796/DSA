def rotate(str1,str2):
    rotated = list(str1)
    for i in range(2):
        popped = rotated.pop(0)
        rotated.append(popped)
    print("".join(rotated))
    if (("".join(rotated))== str2):
        return True
    for i in range(2):
        popped = rotated.pop()
        rotated.insert(0,popped)
    print("".join(rotated))
    if (("".join(rotated)) == str2):
        return True
    return False

result = rotate("amazon","azonam")
print(result)