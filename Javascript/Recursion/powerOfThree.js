//https://leetcode.com/problems/power-of-three/submissions/

var isPowerOfThree = function (n) {
    function powerOfThree(a) {
        if (a == 0) {
            return 1;
        }
        return 3 * powerOfThree(a - 1);
    }
    if (n == 1) {
        return true;
    } else if (n % 3 != 0) {
        return false;
    } else if (n == 0) {
        return false;
    }
    let i = 1;
    while (i <= 31) {
        if (n == powerOfThree(i)) {
            return true;
        }
        i++;
    }
    return false;
};

// Input: n = 27
// Output: true
