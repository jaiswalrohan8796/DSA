//https://leetcode.com/problems/short-encoding-of-words/submissions/

var minimumLengthEncoding = function (W) {
    let set = new Set(W);
    for (let word of W)
        if (set.has(word))
            for (let i = 1; i < word.length; i++) set.delete(word.slice(i));
    return Array.from(set).join().length + 1;
};

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
// words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
// words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
// words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
