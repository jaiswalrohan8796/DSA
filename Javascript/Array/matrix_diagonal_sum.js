//https://leetcode.com/problems/matrix-diagonal-sum/submissions/

var diagonalSum = function(mat) {
    let summ = 0
    p = 0
    s = mat[0].length - 1
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[row].length; col++) {
            if (row == p && col == s) {
                summ += mat[row][col]
            }
            else if (row == p && col == p) {
                 summ += mat[row][col]
            }
            else if (row == s && col == s) {
                 summ += mat[row][col]
            }
        }
        p++;
        s--;
    }
    return summ
};

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.