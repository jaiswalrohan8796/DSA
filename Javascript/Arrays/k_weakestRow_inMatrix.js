//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/submissions/

var kWeakestRows = function (mat, k) {
    let weakestRows = {};
    for (let row = 0; row < mat.length; row++) {
        let soldiers = 0;
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] == 1) {
                soldiers++;
            }
        }
        weakestRows[row] = soldiers;
    }
    sortedWeakRows = Object.entries(weakestRows).sort(([, a], [, b]) => a - b);
    let ans = [];
    for (let t = 0; t < k; t++) {
        ans.push(Number(sortedWeakRows[t][0]));
    }
    return ans;
};

/*
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
*/
