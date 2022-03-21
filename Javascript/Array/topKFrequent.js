//https://leetcode.com/problems/top-k-frequent-elements/submissions/

var topKFrequent = function (nums, k) {
    let ans = [];
    let occ = {};
    for (let num of nums) {
        occ[num] = occ[num] ? occ[num] + 1 : 1;
    }
    let OccList = [];
    for (let num in occ) {
        OccList.push([num, occ[num]]);
    }
    OccList.sort(([a1, b1], [a2, b2]) => b1 - b2);
    while (k--) {
        ans.push(Number(OccList.pop()[0]));
    }
    return ans;
};

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
