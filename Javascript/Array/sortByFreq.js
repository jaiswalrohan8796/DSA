//https://leetcode.com/problems/sort-characters-by-frequency/submissions/

var frequencySort = function (s) {
    let freq = {};
    for (let char of s) {
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
    let freqList = [];
    for (let key in freq) {
        freqList.push([key, freq[key]]);
    }
    freqList.sort(([a1, b1], [a2, b2]) => b2 - b1);
    let ans = "";
    for (let char of freqList) {
        ans += char[0].repeat(char[1]);
    }
    return ans;
};

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
