//https://leetcode.com/problems/remove-palindromic-subsequences/submissions/

var removePalindromeSub = function (s) {
    if (s == null || s.length == 0) {
        return 0;
    }
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] == s[j]) {
            i++;
            j--;
        } else {
            return 2;
        }
    }
    return 1;
};


// Input: s = "abb"
// Output: 2
// Explanation: "abb" -> "bb" -> "". 
// Remove palindromic subsequence "a" then "bb"