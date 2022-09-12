//https://leetcode.com/problems/n-queens-ii/submissions/

var totalNQueens = function (n) {
    let ans = [];
    let cols = new Map();
    let upperDiag = new Map();
    let lowerDiag = new Map();
    backtrack(0, ans, n, cols, upperDiag, lowerDiag);
    return ans.length;
};

function backtrack(row, ans, n, cols, upD, lwD) {
    if (row == n) {
        ans.push(1);
        return;
    }
    for (let col = 0; col < n; col++) {
        if (cols.has(col) || upD.has(row + col) || lwD.has(row - col)) continue;
        cols.set(col);
        upD.set(row + col);
        lwD.set(row - col);
        backtrack(row + 1, ans, n, cols, upD, lwD);
        cols.delete(col);
        upD.delete(row + col);
        lwD.delete(row - col);
    }
}
