# def lengthOfLastWord(self, s: str) -> int:
#     if (s.isspace()):
#         return 0
#     lst = list(s.split(" "))
#     print(lst)
#     i = -1
#     flag= False
#     while lst[i] == "":
#         i-=1
#         flag = True
#     if (flag):
#         return len(lst[i])
#     return len(lst[-1])

        sums = 0
        factor = 1
        for i in range(len(digits)-1,0):
            sums = sums + (digits[i] * factor)
            print(digits[i] * factor)
            factor = factor * 10
        print(sums)