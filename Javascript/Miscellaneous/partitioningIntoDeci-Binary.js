// /https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/

const minPartitions = (n) => Math.max(...n.split(""));

//Intuition
//We observe the digits as graph of n digits. Take the maxmimum 1's required to make one digit.

// 1  .  .  .  .
// 1  .  1  .  .
// 1  .  1  .  .
// 1  .  1  .  .
// 1  .  1  .  1
// 1  .  1  1  1
// 1  1  1  1  1
// 1  1  1  1  1
// 8  2  7  3  4

//max at 8

// Example 1:

// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
// Example 2:

// Input: n = "82734"
// Output: 8
// Example 3:

// Input: n = "27346209830709182346"
// Output: 9
