//https://leetcode.com/problems/valid-palindrome-ii/submissions/

var validPalindrome = function (s) {
    let low = 0;
    let high = s.length - 1;
    let count = 0;
    function recursive(s, low, high, count) {
        if (count > 1) {
            return false;
        }
        while (low <= high) {
            if (s[low] == s[high]) {
                low++;
                high--;
            } else {
                return (
                    recursive(s, low + 1, high, count + 1) ||
                    recursive(s, low, high - 1, count + 1)
                );
            }
        }
        return true;
    }
    return recursive(s, low, high, count);
};

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
