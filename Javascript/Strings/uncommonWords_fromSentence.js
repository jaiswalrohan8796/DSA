//https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/

var uncommonFromSentences = function (s1, s2) {
    let s1List = s1.split(" ");
    let s2List = s2.split(" ");
    let lst = s1List.concat(s2List);
    let counts = {};
    for (let word of lst) {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    }
    let ans = [];
    for (let [k, v] of Object.entries(counts)) {
        if (v == 1) {
            ans.push(k);
        }
    }
    return ans;
};

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
