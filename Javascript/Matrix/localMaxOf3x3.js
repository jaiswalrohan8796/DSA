//https://leetcode.com/problems/largest-local-values-in-a-matrix/

var largestLocal = function(grid) {
    let n = grid.length
    let res = new Array(n-2)
    for(let i = 0; i < n - 2; i++) {
        res[i] = new Array(n-2).fill(0)
    }
    for(let row = 0; row < n - 2; row++) {
        for(let col = 0; col < n - 2; col++) {
            for(let i = row; i < row + 3; i++) {
                for(let j = col; j < col + 3; j++) {
                    res[row][col] = Math.max(res[row][col], grid[i][j])
                }
            }
        }
    }
    return res
};

