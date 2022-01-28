//https://leetcode.com/problems/daily-temperatures/submissions/

var dailyTemperatures = function (temperatures) {
    let ans = [];
    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];
        let arry = temperatures.slice(i + 1, temperatures.length);
        let c = 0;
        while (arry[c] <= temp && c != arry.length) {
            c++;
        }
        if (c == arry.length) {
            ans.push(0);
        } else {
            ans.push(c + 1);
        }
    }
    return ans;
};

// Improve : TLE
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]