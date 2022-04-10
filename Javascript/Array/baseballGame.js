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


