//https://leetcode.com/problems/jump-game-ii/submissions/

var jump = function(nums) {
    let count = 0
    let left = 0
    let right = 0
    while(right < nums.length - 1) {
        let farthest = 0
        for(let i = left; i <= right; i++) {
            farthest = Math.max(farthest, (i + nums[i]))
        }
        left = right + 1
        right = farthest
        count++
    }
    return count
};

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

//Intuition
//Use BFS approach, begininning from Oth index init two pointers left & right
//the next level is left = (0 + 1)th index to ght = farthest it can each
//change the level(left = right + 1)(right = farthest)(jumpcount++)
//do this in while right < nums.length - 1
