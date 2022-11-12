# https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1?page=1&sortBy=submissions&searchQuery=shortest

def shortestPath(self, edges, n, m, src):
    # code here
    G = dict()
    for i in range(m):
        s = edges[i][0]
        d = edges[i][1]
        if not s in G:
            G[s] = []
        if not d in G:
            G[d] = []
        G[s].append(d)
        G[d].append(s)
    #print(G)
    dist = []
    for i in range(n):
        dist.append(float('inf'))
    dist[src] = 0
    que = [[src,0]]
    while len(que) > 0:
        [curr_node, curr_dist] = que.pop(0)
        if curr_node in G:
            for nei in G[curr_node]:
                if dist[nei] > (curr_dist + 1):
                    dist[nei] = curr_dist + 1
                    que.append([nei, dist[nei]])
    #print(dist)
    for i in range(n):
        if dist[i] == float("inf"):
            dist[i] = -1
    return dist