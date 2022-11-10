# https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1?page=1&sortBy=submissions&searchQuery=island

def countDistinctIslands(self, grid : List[List[int]]) -> int:
    # code here
    def findShape(i, j):
        #print("base = {0}:{1}".format(i, j))
        s = [""]
        dfs(i,j, i, j, s)
        return s[0]

    def dfs(i, j, r, c, s):
        if(r >= 0 and c >= 0 and r < R and c < C and grid[r][c] == 1):
            s[0] = s[0] + "{0}:{1},".format(i-r, j-c)
            grid[r][c] = "#"
            #print(s[0])
            dfs(i, j, r, c+1, s)
            dfs(i, j, r, c-1, s)
            dfs(i, j, r+1, c, s)
            dfs(i, j, r-1, c, s)
    myset = set()
    R = len(grid)
    C = len(grid[0])
    for i in range(R):
        for j in range(C):
            if grid[i][j] == 1:
                shape = findShape(i, j)
                myset.add(shape)
    #print(myset)
    return len(myset)
