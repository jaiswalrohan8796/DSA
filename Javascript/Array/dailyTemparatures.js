//https://leetcode.com/problems/daily-temperatures/submissions/

var dailyTemperatures = function(temperatures) {
    let res = []
    for(let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]
        let k = 0
        while(k < temperatures.length - i) {
            if(temperatures[i+k] > temp) {
                break
            }
            else {
                k++
            }
        }
        if(k < temperatures.length - i) res.push(k)
        else res.push(0)
    }
    return res
};

//Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
