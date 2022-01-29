//https://leetcode.com/problems/find-greatest-common-divisor-of-array/submissions/

var findGCD = function(nums) {
    function gcd(num1,num2) {
        while(num1 != num2) {
            if (num1 > num2) {
                num1 -= num2
            }
            else {
                num2 -= num1
            }
        }
        return num1
    }
    
    return gcd(Math.min(...nums),Math.max(...nums))
};

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.