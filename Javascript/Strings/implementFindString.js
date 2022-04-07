//https://leetcode.com/problems/implement-strstr/submissions/

var strStr = function (haystack, needle) {
    let m = needle.length;
    if (m == 0) return 0;
    let curr = "";
    for (let i = 0; i <= haystack.length - m; i++) {
        curr = haystack.slice(i, i + m);
        if (curr == needle) {
            return i;
        }
    }
    return -1;
};


