//https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/submissions/

var numPairsDivisibleBy60 = function (time) {
    let c = new Array(60).fill(0);
    let res = 0;
    for (let t of time) {
        res += c[(600 - t) % 60];
        c[t % 60] += 1;
    }
    return res;
};

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
