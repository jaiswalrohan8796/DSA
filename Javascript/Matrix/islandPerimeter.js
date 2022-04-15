//https://leetcode.com/problems/island-perimeter/submissions/

var islandPerimeter = function (grid) {
    if (grid == null) return 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                return peri(i, j);
            }
        }
    }
    return 0;

    function peri(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
        if (grid[i][j] == 0) {
            return 1;
        }
        if (grid[i][j] == -1) {
            return 0;
        }
        let count = 0;
        grid[i][j] = -1;
        count += peri(i - 1, j);
        count += peri(i + 1, j);
        count += peri(i, j - 1);
        count += peri(i, j + 1);
        return count;
    }
};

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

//Intuition
//BFS => theres only one island so if grid[i][j] == 1, calc perimeter & return
//to calculate perimeter, if neighbour out of range => 1
//                        if neighbour is 0 => 1
//                        if neighbour is -1 => 0
//                        initiate count & do bfs of all neighbours
//                        return count
