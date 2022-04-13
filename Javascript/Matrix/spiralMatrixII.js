//https://leetcode.com/problems/spiral-matrix-ii/submissions/

var generateMatrix = function (n) {
    let res = [];
    let left = 0;
    let right = n;
    let top = 0;
    let bottom = n;
    let count = 1;
    for (let t = 0; t < n; t++) {
        res.push(new Array(n));
    }
    while (left < right && top < bottom) {
        //top elements left to right
        for (let i = left; i < right; i++) {
            res[top][i] = count++;
        }
        top += 1;
        //right elements top to bottom
        for (let i = top; i < bottom; i++) {
            res[i][right - 1] = count++;
        }
        right -= 1;
        //check condition
        if (!(top < bottom && left < right)) {
            break;
        }
        //bottom elements right to left
        for (let i = right - 1; i >= left; i--) {
            res[bottom - 1][i] = count++;
        }
        bottom -= 1;
        //left elements bottom to top
        for (let i = bottom - 1; i >= top; i--) {
            res[i][left] = count++;
        }
        left += 1;
    }
    return res;
};

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
