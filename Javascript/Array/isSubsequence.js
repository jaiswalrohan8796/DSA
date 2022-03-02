//https://leetcode.com/problems/is-subsequence/submissions/

var isSubsequence = function (s, t) {
    if (s.length == 0) return true;
    let sIndex = 0;
    let tIndex = 0;
    while (tIndex < t.length) {
        if (s.charAt(sIndex) == t.charAt(tIndex)) {
            sIndex++;
            if (sIndex == s.length) {
                return true;
            }
        }
        tIndex++;
    }
    return false;
};

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).