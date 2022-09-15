#https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

class Solution:
    def findPath(self, m, n):
        # code here
        if m[0][0] != 1:
            return []
        board = m
        res = []
        dfs(0, 0, [], board, n, res)
        return res
        

def dfs(row, col, path, board, n, res):
    if row == n-1 and col == n-1:
        res.append("".join(path))
        return
    if canGo(row, col+1, board, n):
        board[row][col] = "#"
        path.append("R")
        dfs(row, col+1, path, board, n, res)
        board[row][col] = 1
        path.pop()
    if canGo(row, col-1, board, n):
        board[row][col] = "#"
        path.append("L")
        dfs(row, col-1, path, board, n, res)
        board[row][col] = 1
        path.pop()
    if canGo(row-1, col, board, n):
        board[row][col] = "#"
        path.append("U")
        dfs(row-1, col, path, board, n, res)
        board[row][col] = 1
        path.pop()
    if canGo(row+1, col, board, n):
        board[row][col] = "#"
        path.append("D")
        dfs(row+1, col, path, board, n, res)
        board[row][col] = 1
        path.pop()

def canGo(i, j, board, n):
    ans = i >= 0 and i < n and j >= 0 and j < n and board[i][j] == 1
    return ans
    