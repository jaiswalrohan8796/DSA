//https://leetcode.com/problems/sum-of-unique-elements/submissions/

var sumOfUnique = function (nums) {
    let json = {};
    for (let n of nums) {
        if (n in json) {
            json[n] += 1;
        } else {
            json[n] = 1;
        }
    }
    console.log();
    let summ = Object.entries(json).reduce((acc, [key, value]) => {
        if (value == 1) {
            return acc + Number(key);
        } else {
            return acc;
        }
    }, 0);
    return summ;
};


// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.