//https://leetcode.com/problems/broken-calculator/submissions/

var brokenCalc = function (startValue, target) {
    if (startValue > target) {
        return startValue - target;
    }
    if (startValue == target) {
        return 0;
    }
    if (target % 2 == 0) {
        return brokenCalc(startValue, Math.floor(target / 2)) + 1;
    }
    return brokenCalc(startValue, target + 1) + 1;
};

// Input: startValue = 2, target = 3
// Output: 2
// Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

// Input: startValue = 5, target = 8
// Output: 2
// Explanation: Use decrement and then double {5 -> 4 -> 8}.
