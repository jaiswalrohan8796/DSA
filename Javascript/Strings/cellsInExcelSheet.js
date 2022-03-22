//https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/submissions/

var cellsInRange = function (s) {
    let range = s.split(":");
    let low_col, low_row, upp_col, upp_row;
    [[low_col, low_row], [upp_col, upp_row]] = [
        range[0].split(""),
        range[1].split(""),
    ];

    let ans = [];
    low_col = low_col.charCodeAt(0);
    upp_col = upp_col.charCodeAt(0);
    console.log(low_col, low_row, upp_col, upp_row);
    for (let i = low_col; i <= upp_col; i++) {
        for (let j = low_row; j <= upp_row; j++) {
            ans.push(String.fromCharCode(i) + String(j));
        }
    }
    return ans;
};

// Input: s = "K1:L2"
// Output: ["K1","K2","L1","L2"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrows denote the order in which the cells should be presented.
