//https://leetcode.com/problems/single-number/submissions/

var singleNumber = function (nums) {
    let ans = 0;
    for (let n of nums) {
        ans ^= n;
    }
    return ans;
};

// Input: nums = [4,1,2,1,2]
// Output: 4

// For anyone who didn't understood why this works here is an explanation. This XOR operation works because it's like XORing all the numbers by itself. So if the array is [4,1,2,1,2] then it will be like we are performing this operation

// ((4)^(1^1)^(2^2)) => (4^0^0) => 4.
