//https://leetcode.com/problems/max-consecutive-ones-iii/submissions/

var findMaxConsecutiveOnes = function (nums) {
    let low = 0;
    let high = 0;
    let count_one = 0;
    let maxm = 0;
    while (high < nums.length) {
        if (nums[high] == 1) {
            count_one++;
            high++;
        } else if (nums[high] == 0) {
            count_one = 0;
            high++;
        }
        maxm = Math.max(maxm, count_one);
    }
    return maxm;
};
