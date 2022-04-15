//https://leetcode.com/problems/number-of-islands/submissions/

var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1") {
                count += 1;
                coverArea(i, j);
            }
        }
    }
    return count;

    function coverArea(i, j) {
        if (
            i >= 0 &&
            i < grid.length &&
            j >= 0 &&
            j < grid[0].length &&
            grid[i][j] == "1"
        ) {
            grid[i][j] = "0";
            coverArea(i - 1, j);
            coverArea(i + 1, j);
            coverArea(i, j - 1);
            coverArea(i, j + 1);
        }
    }
};

// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
//   Output: 3

//Intuition

//DFS => for every grid[i][j] == 1, increment count & change all neighbours places to 0

