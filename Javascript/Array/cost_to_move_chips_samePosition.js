//https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/submissions/

var minCostToMoveChips = function (position) {
    let [count_even, count_odd] = [0, 0];
    for (let pos of position) {
        if (pos % 2 == 0) {
            count_even++;
        } else {
            count_odd++;
        }
    }
    return Math.min(count_even, count_odd);
};

//Count moving all evens and all odds => minimum of them is the answer

// Input: position = [1,2,3]
// Output: 1
// Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
// Second step: Move the chip at position 2 to position 1 with cost = 1.
// Total cost is 1.
