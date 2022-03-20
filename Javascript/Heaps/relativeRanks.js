//https://leetcode.com/problems/relative-ranks/submissions/

var findRelativeRanks = function (score) {
    let ans = [];
    let sorted = [...score].sort((a, b) => b - a);
    let ranks = {};
    let c = 0;
    for (let num of sorted) {
        ranks[num] = c;
        c++;
    }
    for (let num of score) {
        if (ranks[num] == 0) {
            ans.push("Gold Medal");
        } else if (ranks[num] == 1) {
            ans.push("Silver Medal");
        } else if (ranks[num] == 2) {
            ans.push("Bronze Medal");
        } else {
            ans.push(String(ranks[num] + 1));
        }
    }
    return ans;
};

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
