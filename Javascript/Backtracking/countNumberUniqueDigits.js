//https://leetcode.com/problems/count-numbers-with-unique-digits/description/

var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1;
    let ans = 10;
    let curr = 9;
    let mult = 9;
    while (n-- > 1 && mult > 0) {
        curr *= mult--;
        ans += curr;
    }
    return ans;
};

// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
