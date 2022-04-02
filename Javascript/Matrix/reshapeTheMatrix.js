//https://leetcode.com/problems/reshape-the-matrix/submissions/

var matrixReshape = function (mat, r, c) {
    let M = mat.length;
    let N = mat[0].length;
    if (M * N != r * c) return mat;

    let output = [];
    for (let i = 0; i < r; i++) {
        output.push(new Array(c));
    }
    let k = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            output[Math.floor(k / c)][Math.floor(k % c)] = mat[i][j];
            k++;
        }
    }
    return output;
};

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

//Intuition
//When comparing to linear matrix of length 0 to k, 2D matrix has relationship of row = k//col, col = k%col
