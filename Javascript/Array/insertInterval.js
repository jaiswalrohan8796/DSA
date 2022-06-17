//https://leetcode.com/problems/insert-interval/submissions/

var insert = function (intervals, newInterval) {
    let res = [];
    for (let curr of intervals) {
        //newInterval is after the curr
        if (curr[1] < newInterval[0]) {
            res.push(curr);
        }
        //newInterval is before the curr
        else if (curr[0] > newInterval[1]) {
            res.push(newInterval);
            newInterval = curr;
        }
        //newInterval is in range of the curr
        else if (curr[1] >= newInterval[0] || curr[0] <= newInterval[1]) {
            newInterval[0] = Math.min(curr[0], newInterval[0]);
            newInterval[1] = Math.max(newInterval[1], curr[1]);
        }
    }
    res.push(newInterval);
    return res;
};

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// the main idea is that when iterating over the intervals there are three cases:

// the new interval is in the range of the other interval
// the new interval's range is before the other
// the new interval is after the range of other interval
