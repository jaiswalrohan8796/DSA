//https://leetcode.com/problems/longest-palindromic-substring/submissions/

var longestPalindrome = function (s) {
    let max = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (s[left] && s[left] == s[right]) {
                left--;
                right++;
            }
            if (right - left - 1 > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};


