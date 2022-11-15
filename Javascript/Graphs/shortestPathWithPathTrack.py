# https://practice.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1?page=1&sortBy=submissions&searchQuery=shortest

class Solution:
    def shortestPath(self, n, m, edges):
        # Code here
        G = dict()
        for e in edges:
            s = e[0]
            d = e[1]
            w = e[2]
            if s not in G:
                G[s] = []
            if d not in G:
                G[d] = []
            G[s].append([d, w])
            G[d].append([s, w])
        #print(G)
        parent = []
        for i in range(n+1):
            parent.append(i)
        dist = []
        for i in range(n+1):
            dist.append(float('inf'))
        dist[1] = 0
        que = Queue()
        que.put([1, dist[1], -1])
        while que.qsize() > 0:
            [curr_node, curr_dist, curr_parent] = que.get()
            if curr_parent != -1:
                parent[curr_node] = curr_parent
            if curr_node not in G:
                continue
            for [nei, d] in G[curr_node]:
                if dist[nei] > (curr_dist + d):
                    dist[nei] = curr_dist + d
                    que.put([nei, dist[nei], curr_node])
            
        if dist[n] == float('inf'):
            return [-1]
        res = []
        idx = n
        while idx != parent[idx]:
            res.append(idx)
            idx = parent[idx]
        res.append(1)
        return reversed(res)
