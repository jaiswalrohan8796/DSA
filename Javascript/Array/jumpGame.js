//https://leetcode.com/problems/jump-game/

var canJump = function(nums) {
    let goal = nums.length - 1
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i + nums[i] >= goal) {
            goal = i
        }
    }
    return goal == 0
};

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. 

//Intuition
//Instead of reaching from start to goal; try goal => start
//Initially goal is last
//Iterate from last element to get to one step backwards if possible => goal = i 
//If there is a possibility then at the end goal will be 0.
