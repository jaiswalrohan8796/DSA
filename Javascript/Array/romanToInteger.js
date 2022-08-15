//https://leetcode.com/problems/roman-to-integer/submissions/

var romanToInt = function (s) {
    let romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let ans = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (romans[s[i]] < romans[s[i + 1]]) {
            ans -= romans[s[i]];
        } else {
            ans += romans[s[i]];
        }
    }
    return ans + romans[s[s.length - 1]];
};

//Intuition

//Check current element & next element, if current is less than the next, subtract current element from total, else add current to total. At last always add last element to total.
