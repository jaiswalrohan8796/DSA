//https://leetcode.com/problems/surrounded-regions/

var solve = function (board) {
    function dfs(row, col) {
        if (
            row < 0 ||
            col < 0 ||
            row >= board.length ||
            col >= board[0].length ||
            board[row][col] != "O"
        )
            return;
        board[row][col] = "#";
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
    let m = board.length;
    let n = board[0].length;
    //first & last col
    for (let i = 0; i < m; i++) {
        if (board[i][0] == "O") {
            dfs(i, 0);
        }
        if (board[i][n - 1] == "O") {
            dfs(i, n - 1);
        }
    }
    //first & last row
    for (let j = 0; j < n; j++) {
        if (board[0][j] == "O") {
            dfs(0, j);
        }
        if (board[m - 1][j] == "O") {
            dfs(m - 1, j);
        }
    }
    //console.log(board)
    //flip
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X";
            }
            if (board[i][j] == "#") {
                board[i][j] = "O";
            }
        }
    }
};
