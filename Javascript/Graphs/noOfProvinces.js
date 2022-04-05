//https://leetcode.com/problems/number-of-provinces/submissions/

var findCircleNum = function (isConnected) {
    let visited = new Set();
    let count = 0;
    function dfs(i) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
            count += 1;
        }
    }
    return count;
};

// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

//Intuition
//Find no. of connected components
