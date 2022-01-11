//https://leetcode.com/problems/baseball-game/submissions/

var calPoints = function (ops) {
    let ans = [];
    for (let op of ops) {
        if (op == "C") {
            ans.pop();
        } else if (op == "D") {
            let temp = Number(ans[ans.length - 1]);
            ans.push(temp * 2);
        } else if (op == "+") {
            let temp1 = ans[ans.length - 1];
            let temp2 = ans[ans.length - 2];
            ans.push(temp1 + temp2);
        } else {
            ans.push(Number(op));
        }
        console.log(ans);
    }
    return ans.reduce((a, b) => a + b, 0);
};

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
