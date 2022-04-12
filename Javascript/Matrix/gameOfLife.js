//https://leetcode.com/problems/game-of-life/submissions/

var gameOfLife = function (board) {
    if (board.length === 0) {
        return board;
    }
    var checkNeighbors = function (row, col) {
        var score = -board[row][col];
        var r, c;
        for (r = row - 1; r <= row + 1; r++) {
            for (c = col - 1; c <= col + 1; c++) {
                if (
                    typeof board[r] !== "undefined" &&
                    typeof board[r][c] !== "undefined"
                ) {
                    score += Math.abs(Math.floor(board[r][c]));
                }
            }
        }
        return score;
    };
    var r, c;
    for (r = 0; r < board.length; r++) {
        for (c = 0; c < board[0].length; c++) {
            var score = checkNeighbors(r, c);
            if (board[r][c] === 1) {
                if (score < 2 || score > 3) {
                    board[r][c] = -0.5;
                }
            } else if (board[r][c] === 0) {
                if (score === 3) {
                    board[r][c] = 0.5;
                }
            }
        }
    }

    for (r = 0; r < board.length; r++) {
        for (c = 0; c < board[0].length; c++) {
            board[r][c] = Math.ceil(board[r][c]);
        }
    }
};

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
