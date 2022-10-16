t = int(input())
for x in range(t):
    lst = list(map(int, input().split()))
    m = lst[0]
    n = lst[1]
    p = lst[2]
    score_need = 0
    p_scores = []
    p = p - 1
    days_max = [0]*n
    for i in range(m):
        scores = list(map(int, input().strip().split()))
        if i != p:
            for d in range(n):
                days_max[d] = max(days_max[d], scores[d])
        elif i == p:
            p_scores = scores.copy()
        for k in range(n):
            if (p_scores[k] < days_max[k]):
                score_need += days_max[k] - p_scores[k]

    print("Case #{0}: {1}".format(x, score_need))
