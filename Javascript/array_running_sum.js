//https://leetcode.com/problems/running-sum-of-1d-array/submissions/


var runningSum = function(nums) {
    let test = nums.slice()
    let ans = nums.map((item,idx,array) => {
        let summ = test.slice(0,idx+1).reduce((prev,curr) => prev + curr)
        return summ
    })
    return ans
};




// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].