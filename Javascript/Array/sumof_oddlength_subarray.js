//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/submissions/

var sumOddLengthSubarrays = function (arr) {
    let summ = [];
    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = 0; j < arr.length; j++) {
            if (j + i <= arr.length) {
                summ.push(...arr.slice(j, j + i));
            }
        }
    }
    return summ.reduce((acc, cur) => acc + cur, 0);
};

/*
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58 
*/
