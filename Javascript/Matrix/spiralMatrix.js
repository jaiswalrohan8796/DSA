//https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    let res = []
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length
    
    while(left < right && top < bottom) {
        //get all the top elements
        for(let i = left; i < right;i++) {
            res.push(matrix[top][i])
        }
        top += 1
        
        //get all the right elements
        for(let i = top; i < bottom; i++) {
            res.push(matrix[i][right-1])
        }
        right -= 1
        
        //check condition
        if(!(left < right && top < bottom)) {
            break;
        }
        //get all the bottom elements
        for(let i = right-1; i >= left; i--) {
            res.push(matrix[bottom - 1][i])
        }
        bottom -= 1
        
        //get all the left elements
        for(let i = bottom-1; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left += 1
    }
    return res
}


//[1,2,3]
//[4,5,6]
//[7,8,9]

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

//Intuition
//1. Initialize 4 bars reprensenting left, right+1,top, bottom+1 range
// 2. Iterate while left < right && top < bottom
// 3. Get all the top elements & shift top bar to down (i.e increment one)
// 4. Get all the right elements & shift right bar to left side ( i.e decrement one)
//5. Check the bar conditions(similar in while condition)
//6. Get all the bottom elements & shift the bottom bar to top (i.e dec one)
//7. Get all the left elements & shift left bar to right (i.e incr one)

//8 return the result