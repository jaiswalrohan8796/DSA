//https://leetcode.com/problems/partition-labels/submissions/

var partitionLabels = function (s) {
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        let width = s.lastIndexOf(s[i]);
        for (let j = i; j < width; j++) {
            if (s.lastIndexOf(s[j]) > width) {
                width = s.lastIndexOf(s[j]);
            }
        }
        ans.push(width - i + 1);
        i = width;
    }
    return ans;
};

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
