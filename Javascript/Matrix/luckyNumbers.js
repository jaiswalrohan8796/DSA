//https://leetcode.com/problems/lucky-numbers-in-a-matrix/submissions/

var luckyNumbers  = function(matrix) {
    let ans = []
    let minRows = []
    let maxCols = []
    for(let row = 0; row < matrix.length; row++) {
        minRows.push(Math.min(...matrix[row]))
    }
    for(let col = 0; col < matrix[0].length; col++) {
        let temp = []
        for(let row = 0; row < matrix.length; row++) {
            temp.push(matrix[row][col])
        }
        maxCols.push(Math.max(...temp))
    }
    for(let num of minRows) {
        if(maxCols.includes(num)) {
            ans.push(num)
        }
    }
    return ans
};

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
