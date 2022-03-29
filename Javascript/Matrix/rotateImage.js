//https://leetcode.com/problems/rotate-image/submissions/

var rotate = function (matrix) {
    let l = 0;
    let r = matrix.length - 1;

    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let top = l;
            let bottom = r;

            //save top left
            let topLeft = matrix[top][l + i];
            //move bottom left to top left
            matrix[top][l + i] = matrix[bottom - i][l];
            //move bottom right to bottom left
            matrix[bottom - i][l] = matrix[bottom][r - i];
            //move top right to bottom right
            matrix[bottom][r - i] = matrix[top + i][r];
            //move top left to top right
            matrix[top + i][r] = topLeft;
        }
        r--;
        l++;
    }
};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
