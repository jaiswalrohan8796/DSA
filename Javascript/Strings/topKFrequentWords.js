//https://leetcode.com/problems/top-k-frequent-words/submissions/

var topKFrequent = function (words, k) {
    let ans = [];
    let occ = {};
    for (let word of words) {
        occ[word] = occ[word] ? occ[word] + 1 : 1;
    }
    let OccList = [];
    for (let num in occ) {
        OccList.push([num, occ[num]]);
    }
    OccList.sort(([a1, b1], [a2, b2]) => {
        if (b2 == b1) {
            return a2.localeCompare(a1);
        } else {
            return b1 - b2;
        }
    });
    while (k--) {
        ans.push(OccList.pop()[0]);
    }
    return ans;
};

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
