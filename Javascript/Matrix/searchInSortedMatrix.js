//https://leetcode.com/problems/search-a-2d-matrix/submissions/

var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let start = 0;
    let end = row * col - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let temp = matrix[Math.floor(mid / col)][Math.floor(mid % col)];
        if (target == temp) {
            return true;
        }
        if (target < temp) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

//Intuition

//1. See the matrix as a sorted list from (0,0) -> (row*col-1,col)
//2. Apply binary search
//3. value of mid in matrix == matrix[mid/col][mid%col]   (both Math.floor)
