//https://leetcode.com/problems/max-area-of-island/submissions/

var maxAreaOfIsland = function (grid) {
    let max_area = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) max_area = Math.max(max_area, area(i, j));
        }
    }
    return max_area;

    function area(i, j) {
        if (
            i >= 0 &&
            i < grid.length &&
            j >= 0 &&
            j < grid[0].length &&
            grid[i][j] == 1
        ) {
            grid[i][j] = 0;
            return (
                1 +
                area(i - 1, j) +
                area(i + 1, j) +
                area(i, j - 1) +
                area(i, j + 1)
            );
        }
        return 0;
    }
};

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

//Intuition

//For every grid having 1 , calculate neighbors area & return max area
//for neighbors area see condtions like in range & having value == 1 & only 4 directions
