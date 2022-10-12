//https://leetcode.com/problems/break-a-palindrome/submissions/

var breakPalindrome = function (palindrome) {
    let n = palindrome.length;
    if (n < 2) return "";
    let pal = palindrome;
    for (let i = 0; i < ~~(n / 2); i++) {
        if (pal[i] != "a") {
            pal = pal.replaceAt(i, "a");
            return pal;
        }
    }
    pal = pal.replaceAt(n - 1, "b");
    return pal;
};

String.prototype.replaceAt = function (index, char) {
    return (
        this.substring(0, index) + char + this.substring(index + 1, this.length)
    );
};

//Inntuition
//Checkfor first non "a" char in left half , if found replace -> "a"
//Else, replace the last character of sec half -> "b"

//Input: palindrome = "abccba"
// Output: "aaccba"
// Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
// Of all the ways, "aaccba" is the lexicographically smallest.
