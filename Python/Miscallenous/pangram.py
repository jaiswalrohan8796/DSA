def checkPangram(s):
    #code here
    letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    present = []
    lst = list(s)
    for i in lst:
        i = i.lower()
        if i.isalpha() == True:
            if i not in present:
                present.append(i)
    present.sort()
    #print(present)
    if len(present) == len(letters):
        return 1
    return 0
print(checkPangram("wlG @ i B@z Y N ygZ !D"))