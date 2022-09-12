//https://leetcode.com/problems/n-queens/

// safe check using hash maps O(1) , SC (n + 2n + 2n)

var solveNQueens = function (n) {
    let board = new Array(n);
    for (let k = 0; k < n; k++) {
        board[k] = new Array(n).fill(".");
    }
    let res = [];
    let cols = new Map();
    let lowerDiag = new Map();
    let upperDiag = new Map();
    backtrack(0, board, res, n, cols, lowerDiag, upperDiag);
    return res.map((board) => board.map((arr) => arr.join("")));
};

function backtrack(row, board, res, n, cols, lowerDiag, upperDiag) {
    if (row == n) {
        res.push(board.map((arr) => arr.slice()));
        return;
    }
    for (let col = 0; col < n; col++) {
        if (
            cols.has(col) ||
            upperDiag.has(row + col) ||
            lowerDiag.has(row - col)
        )
            continue;
        board[row][col] = "Q";
        cols.set(col);
        upperDiag.set(row + col);
        lowerDiag.set(row - col);
        backtrack(row + 1, board, res, n, cols, lowerDiag, upperDiag);
        board[row][col] = ".";
        cols.delete(col);
        upperDiag.delete(row + col);
        lowerDiag.delete(row - col);
    }
}

//safe check using traditional loop methods O(n + n + n), SC O(1)
var solveNQueens = function (n) {
    let board = new Array(n);
    for (let k = 0; k < n; k++) {
        board[k] = new Array(n).fill(".");
    }
    let res = [];
    backtrack(0, board);
    return res.map((board) => board.map((arr) => arr.join("")));
    function backtrack(col, board) {
        if (col == n) {
            res.push(board.map((arr) => arr.slice()));
            return;
        } else {
            for (let row = 0; row < n; row++) {
                if (isSafe(row, col, board, n)) {
                    board[row][col] = "Q";
                    backtrack(col + 1, board);
                    board[row][col] = ".";
                }
            }
        }
    }
};

function isSafe(row, col, board, n) {
    let i = row;
    let j = col;

    //check leftRow
    while (j >= 0) {
        if (board[i][j] == "Q") return false;
        j--;
    }
    //check lowerDiagonal
    i = row;
    j = col;
    while (i >= 0 && j >= 0) {
        if (board[i][j] == "Q") return false;
        i--;
        j--;
    }
    //check upperDiagonal
    i = row;
    j = col;
    while (i < n && j >= 0) {
        if (board[i][j] == "Q") return false;
        i++;
        j--;
    }

    return true;
}

//In order to generate the board where all the n queens are placed, use a DFS approach with backtrack.
//Try to fill first row with a queen
//find all possible places where its safe to fill the queen
// for every possible place found, mark queen there, save row,col in hashmap, recursively call for next row, untill
//if done with final row, then save the board with n queens places safely.
//always backtrack to save all possible solutions.
