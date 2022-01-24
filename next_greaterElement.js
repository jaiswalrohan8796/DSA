//https://leetcode.com/problems/next-greater-element-ii/submissions/

var nextGreaterElements = function (nums) {
    let arry = nums.concat(nums);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = arry.slice(i + 1, arry.length);
        let maxm = nums[i];
        for (n of temp) {
            if (n > maxm) {
                maxm = n;
                ans.push(n);
                break;
            }
        }
        if (maxm == nums[i]) {
            ans.push(-1);
        }
    }
    return ans;
};

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
