//https://leetcode.com/problems/set-matrix-zeroes/submissions/

var setZeroes = function(matrix) {
    let temp = []
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0) {
                temp.push([i,j])
            }
        }
    }
    for(let t of temp) {
        cover(t[0],t[1])
    }
    function cover(i , j) {
        for(let col = 0; col < matrix[0].length; col++) {
           matrix[i][col] = 0 
        } 
        for(let row = 0; row < matrix.length; row++) {
            matrix[row][j] = 0
        }
    }
};

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
