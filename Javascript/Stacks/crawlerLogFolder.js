//https://leetcode.com/problems/crawler-log-folder/submissions/

var minOperations = function (logs) {
    let ans = [];
    for (let op of logs) {
        if (op == "../") {
            if (ans.length != 0) {
                ans.pop();
            }
        } else if (op == "./") {
            null;
        } else {
            ans.push(op);
        }
    }
    return ans.length;
};

// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.