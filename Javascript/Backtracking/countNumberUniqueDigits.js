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

//Intuition
// 0 - 10 => 10 unique (0,1,2,3,4,5,6,7,8,9)
// 0 - 100 => (0-10)u + (11-100) => 10 + (_,_) => 10 + (9 * 9) => 81
//0 - 1000 => (0-10)u + (11-100) + (101- 1000) => 10 + 81 + (9*9*8) => 739