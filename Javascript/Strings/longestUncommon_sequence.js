//https://leetcode.com/problems/longest-uncommon-subsequence-i/submissions/

var findLUSlength = function(a, b) {
    if(a == b) {
        return -1
    }
    else {
        return Math.max(a.length,b.length)
    }
};

// Input: a = "aba", b = "cdc"
// Output: 3
// Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// Note that "cdc" is also a longest uncommon subsequence.