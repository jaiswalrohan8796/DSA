//https://leetcode.com/problems/first-missing-positive/

//Brute Force -> O(N + max(nums[i])), S(N)

var firstMissingPositive = function (nums) {
    let mapp = new Map();
    let maxx = Number.MIN_SAFE_INTEGER;
    for (let val of nums) {
        if (val > maxx) maxx = val;
        mapp.set(val, val);
    }
    if (maxx < 1) return 1;
    for (let i = 1; i <= maxx; i++) {
        if (mapp.has(i)) {
            continue;
        } else {
            return i;
        }
    }
    return maxx + 1;
};
