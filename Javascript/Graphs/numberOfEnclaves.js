//https://leetcode.com/problems/number-of-enclaves/description/

var numEnclaves = function (grid) {
    function dfs(row, col) {
        if (row >= 0 && col >= 0 && row < R && col < C && grid[row][col] == 1) {
            grid[row][col] = "#";
            dfs(row - 1, col);
            dfs(row + 1, col);
            dfs(row, col - 1);
            dfs(row, col + 1);
        }
    }
    let R = grid.length;
    let C = grid[0].length;
    //first col & last col
    for (let i = 0; i < R; i++) {
        //first col
        if (grid[i][0] == 1) {
            dfs(i, 0);
        }
        //last col
        if (grid[i][C - 1] == 1) {
            dfs(i, C - 1);
        }
    }
    //first row & last row
    for (let i = 0; i < C; i++) {
        //first row
        if (grid[0][i] == 1) {
            dfs(0, i);
        }
        //last row
        if (grid[R - 1][i] == 1) {
            dfs(R - 1, i);
        }
    }
    // count the remaining number of ones.
    let ans = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid[i][j] == 1) {
                ans += 1;
            }
        }
    }
    return ans;
};
