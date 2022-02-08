//https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function (s) {
    const seen = new Map();
    let start = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
        seen.set(s[i], i);
        maxLen = Math.max(i - start + 1, maxLen);
    }
    return maxLen;
};


// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.