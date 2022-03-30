// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let l = 0;
    let maxm = 0;
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        maxm = Math.max(maxm, r - l + 1);
    }
    return maxm;
};

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.



//Intuition

//Use sliding window & to set to store unique characters
