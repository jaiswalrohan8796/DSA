//https://leetcode.com/problems/power-of-two/submissions/

var isPowerOfTwo = function (n) {
    function powerOfTwo(a) {
        if (a == 0) {
            return 1;
        }
        return 2 * powerOfTwo(a - 1);
    }
    if (n == 1) {
        return true;
    } else if (n % 2 != 0) {
        return false;
    }
    let i = 1;
    while (i <= 31) {
        if (n == powerOfTwo(i)) {
            return true;
        }
        i++;
    }
    return false;
};

// Input: n = 16
// Output: true
// Explanation: 24 = 16
