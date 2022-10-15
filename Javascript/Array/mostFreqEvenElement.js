//https://leetcode.com/problems/most-frequent-even-element/submissions/

var mostFrequentEven = function (nums) {
    let fre = 0;
    let value = 100000009;
    let freq = new Map();
    for (let val of nums) {
        if (val % 2 == 0) {
            if (!freq.has(val)) {
                freq.set(val, 1);
            } else {
                freq.set(val, freq.get(val) + 1);
            }
            if (freq.get(val) > fre || (freq.get(val) == fre && val < value)) {
                fre = freq.get(val);
                value = val;
            }
        }
    }
    if (fre == 0) return -1;
    return value;
};
