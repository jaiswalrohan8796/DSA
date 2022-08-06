//https://leetcode.com/problems/valid-sudoku/submissions/

var isValidSudoku = function (board) {
    //check rows & cols
    for (let row = 0; row < 9; row++) {
        let db_col = new Map();
        let db_row = new Map();
        for (let col = 0; col < 9; col++) {
            //check row
            if (board[row][col] != ".") {
                if (db_row.has(board[row][col])) return false;
                else {
                    db_row.set(board[row][col], 1);
                }
            }
            //check_col
            if (board[col][row] != ".") {
                if (db_col.has(board[col][row])) return false;
                else {
                    db_col.set(board[col][row], 1);
                }
            }
        }
    }
    //chech sub-boxes
    function check_sub(x, y) {
        let db_sub = new Map();
        let x_lim = x + 2;
        let y_lim = y + 2;
        for (let row = x; row <= x_lim; row++) {
            for (let col = y; col <= y_lim; col++) {
                if (board[row][col] != ".") {
                    if (db_sub.has(board[row][col])) return false;
                    else {
                        db_sub.set(board[row][col], 1);
                    }
                }
            }
        }
        return true;
    }
    for (let r = 0; r < 9; r += 3) {
        for (let c = 0; c < 9; c += 3) {
            if (!check_sub(r, c)) return false;
        }
    }
    //all valid
    return true;
};

//short & precise one

var isValidSudoku = function (board) {
    let seen = new Map();
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] != ".") {
                let n = board[row][col];
                let inRow = `${n} in row-${row}`;
                let inCol = `${n} in col-${col}`;
                let inSub = `${n} in row-${Math.floor(
                    row / 3
                )}=col-${Math.floor(col / 3)}`;
                if (seen.has(inRow)) return false;
                else {
                    seen.set(inRow, 1);
                }
                if (seen.has(inCol)) return false;
                else {
                    seen.set(inCol, 1);
                }
                if (seen.has(inSub)) return false;
                else {
                    seen.set(inSub, 1);
                }
            }
        }
    }
    return true;
};

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
