//https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    let start = 0
    let end = matrix.length * matrix[0].length - 1
    while(start <= end) {
        let mid = ~~((start + end)/2)
        let row = ~~(mid/matrix[0].length)
        let col = mid % matrix[0].length
        if(matrix[row][col] == target) return true
        if(matrix[row][col] > target) {
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    return false
};


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
