//https://leetcode.com/problems/merge-intervals/submissions/

var merge = function (intervals) {
    intervals = intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else if (a[11] > b[1]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    let res = [];
    for (let next of intervals) {
        if (res.length != 0) {
            let prev = res[res.length - 1];
            if (next[0] > prev[1]) {
                res.push(next);
                continue;
            } else {
                res[res.length - 1][0] = Math.min(prev[0], next[0]);
                res[res.length - 1][1] = Math.max(prev[1], next[1]);
            }
        } else {
            res.push(next);
        }
    }
    return res;
};

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
