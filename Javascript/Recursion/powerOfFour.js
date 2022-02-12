//https://leetcode.com/problems/power-of-four/submissions/

var isPowerOfFour = function (n) {
    if (n == 0) {
        return false;
    }
    if (n == 1) {
        return true;
    }
    function powerOfFour(x) {
        if (x == 0) {
            return 1;
        }
        return 4 * powerOfFour(x - 1);
    }
    let i = 0;
    while (i <= 31) {
        if (n == powerOfFour(i)) {
            return true;
        }
        i++;
    }
    return false;
};

// Input: n = 16
// Output: true
