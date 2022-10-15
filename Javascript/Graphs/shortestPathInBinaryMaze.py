# https://practice.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1
from typing import List


class Solution:

    def shortestPath(self, grid: List[List[int]], source: List[int], destination: List[int]) -> int:
        # code here
        if grid[source[0]][source[1]] != 1:
            return -1
        steps = 0
        vis = dict()
        vis["{0}-{1}".format(source[0], source[1])] = 1
        que = [[source[0], source[1]]]
        while len(que) > 0:
            size = len(que)
            for i in range(size):
                curr = que.pop(0)
                grid[curr[0]][curr[1]] = "#"
                if destination[0] == curr[0] and destination[1] == curr[1]:
                    return steps
                adj = self.adjacents(curr[0], curr[1], grid)
                for a in adj:
                    if ("{0}-{1}".format(a[0], a[1]) not in vis):
                        vis["{0}-{1}".format(a[0], a[1])] = 1
                        que.append([a[0], a[1]])
            steps += 1
        return -1

    def adjacents(self, i, j, grid):
        res = []
        if (self.isOutBound(i-1, j, grid) == False and grid[i-1][j] == 1):
            res.append([i-1, j])
        if (self.isOutBound(i+1, j, grid) == False and grid[i+1][j] == 1):
            res.append([i+1, j])
        if (self.isOutBound(i, j-1, grid) == False and grid[i][j-1] == 1):
            res.append([i, j-1])
        if (self.isOutBound(i, j+1, grid) == False and grid[i][j+1] == 1):
            res.append([i, j+1])
        return res

    def isOutBound(self, i, j, grid):
        return i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0])
