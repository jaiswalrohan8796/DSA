//https://leetcode.com/problems/transpose-matrix/submissions/

var transpose = function(M) {
    let N = []
    for(let i = 0; i < M[0].length; i++) {
        if(!N[i]) N[i] = []
        for(let j = 0; j < M.length; j++) {
            N[i][j] = M[j][i]
        }
    }
    return N
}

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
