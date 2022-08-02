//https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length
    let low = matrix[0][0]
    let high = matrix[n-1][n-1]
    
    function checkCount(mid,matrix) {
        let count = 0
        let n = matrix.length
        let row = 0 // start checking from first row upto last
        let col = n-1 // start checking from last column (sorted)
         while(row < n && col >= 0) {
             //is last element is smaller/equal, then whole row is smaller/equal
             if(matrix[row][col] <= mid) {
                 count += col + 1
                 row += 1
             }
             else {
                 //check previous element
                 col -= 1
             }
         }
        return count
    }
    
    while(low < high) {
        let mid = Math.floor((low + high)/2)
        if(checkCount(mid,matrix) < k) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return low
};


// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
