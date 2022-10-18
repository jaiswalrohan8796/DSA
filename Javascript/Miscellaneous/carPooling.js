//https://leetcode.com/problems/car-pooling/

var carPooling = function (trips, capacity) {
    let map = new Array(1001).fill(0);
    for (let t of trips) {
        map[t[1]] += t[0];
        map[t[2]] -= t[0];
    }
    for (let val of map) {
        capacity -= val;
        if (capacity < 0) return false;
    }
    return true;
};
