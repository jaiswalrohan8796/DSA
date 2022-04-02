//https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    if (s.length == 0) {
        return true;
    }
    console.log(s);
    let low = 0;
    let high = s.length - 1;
    while (low <= high) {
        if (s[low] != s[high]) {
            return false;
        } else {
            low += 1;
            high -= 1;
        }
    }
    return true;
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
