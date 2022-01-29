//https://leetcode.com/problems/number-of-recent-calls/submissions/

var RecentCounter = function () {
    this.list = [];
};

RecentCounter.prototype.ping = function (t) {
    this.list.push(t);
    let i = t - 3000;
    let j = t;
    let count = 0;
    for (let num of this.list) {
        if (num >= i && num <= j) {
            count++;
        }
    }
    return count;
};

// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
