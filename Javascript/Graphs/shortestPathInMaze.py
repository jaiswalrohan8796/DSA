# https://practice.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1

class Solution:
    
    def shortestPath(self, grid: List[List[int]], source: List[int], destination: List[int]) -> int:
        # code here
        if grid[source[0]][source[1]] != 1:
            return -1
        dist = [None] * len(grid)
        for i in range(len(grid)):
            dist[i] = [float('inf')] * len(grid[0])
        dist[source[0]][source[1]] = 0
        que = Queue()
        que.put((0, [source[0], source[1]]))
        dist[source[0]][source[1]] = 0
        while not que.empty():
            size = que.qsize()
            for i in range(size):
                (curr_dist, [curr_r, curr_c]) = que.get()
                # print([curr_r, curr_c], curr_dist)
                if curr_r == destination[0] and curr_c == destination[1]:
                    return curr_dist
                adj = self.adjacents(curr_r, curr_c, grid)
                for nei in adj:
                    if dist[nei[0]][nei[1]] > (curr_dist + 1):
                        dist[nei[0]][nei[1]] = curr_dist + 1
                        que.put((curr_dist + 1, nei))
            
        if dist[destination[0]][destination[1]] == float('inf'):
            return -1
        return dist[destination[0]][destination[1]]
        
    def distance_from_dest(self, p1, p2):
        return math.sqrt( ((p1[0]-p2[0])**2)+((p1[1]-p2[1])**2) )
    
    def adjacents(self, i, j, grid):
        res = []
        if(self.isOutBound(i-1,j, grid) == False and grid[i-1][j] == 1):
            res.append([i-1, j])
        if(self.isOutBound(i+1,j, grid) == False and grid[i+1][j] == 1):
            res.append([i+1, j])
        if(self.isOutBound(i,j-1, grid) == False and grid[i][j-1] == 1):
            res.append([i, j-1])
        if(self.isOutBound(i,j+1, grid) == False and grid[i][j+1] == 1):
            res.append([i, j+1])
        return res
    
    def isOutBound(self, i, j, grid):
        return i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0])