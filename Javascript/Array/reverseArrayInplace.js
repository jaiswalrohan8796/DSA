//https://leetcode.com/problems/reverse-string/submissions/

var reverseString = function(s) {
    let low = 0
    let high = s.length - 1
    while (low < high) {
        [s[low],s[high]] = [s[high],s[low]]
        low++
        high--
    }
};

//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]
