//https://leetcode.com/problems/count-common-words-with-one-occurrence/submissions/

var countWords = function (words1, words2) {
    let count = 0;
    let counts1 = {};
    let counts2 = {};
    for (let word of words1) {
        counts1[word] = counts1[word] ? counts1[word] + 1 : 1;
    }
    for (let word of words2) {
        counts2[word] = counts2[word] ? counts2[word] + 1 : 1;
    }
    for (let [key1, val1] of Object.entries(counts1)) {
        if (val1 == 1) {
            if (counts2.hasOwnProperty(key1) && counts2[key1] == val1) {
                count++;
            }
        }
    }
    return count;
};

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
