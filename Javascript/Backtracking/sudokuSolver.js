//https://leetcode.com/problems/sudoku-solver/submissions/

var solveSudoku = function (board) {
    function solve(board, row, col) {
        //if all cols filled, move to nex row first col
        if (col == board[0].length) {
            col = 0;
            row += 1;
        }
        //if all rows filled, solution found send true up
        if (row == board.length) {
            return true;
        }
        //check if cell has value already & oslve next col
        if (board[row][col] != ".") return solve(board, row, col + 1);
        for (let i = 1; i < 10; i++) {
            i = i.toString();
            //if this value can be placed, place it & solve next cell
            if (isValid(board, row, col, i)) {
                board[row][col] = i;
                let solved = solve(board, row, col + 1);
                //if this trail gives the answer,dont roll back the changes
                if (solved) return true;
                // else rollback the changed value
                else {
                    board[row][col] = ".";
                }
            }
        }
        //none of the values from 1 - 9 fitted here, return false
        return false;
    }
    function isValid(board, row, col, val) {
        for (let k = 0; k < board.length; k++) {
            //check cols
            if (board[k][col] == val) return false;

            //check row
            if (board[row][k] == val) return false;
        }
        //check sub-box of 3 * 3
        let b_row = Math.floor(row / 3);
        let b_col = Math.floor(col / 3);
        for (let m = b_row * 3; m < (b_row + 1) * 3; m++) {
            for (let n = b_col * 3; n < (b_col + 1) * 3; n++) {
                if (board[m][n] == val) return false;
            }
        }

        return true;
    }
    solve(board, 0, 0);
};
