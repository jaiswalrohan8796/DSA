//https://leetcode.com/problems/majority-element/submissions/

var majorityElement = function (nums) {
    let n = Math.floor(nums.length / 2);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        if (map[nums[i]] > n) {
            return nums[i];
        }
    }
};

//Moore's Voting Algorithm (majority element should exist for this algorithm to work)

var majorityElement = function(nums) {
    let count = 1
    let res = 0
    for(let n of nums) {
        if(res != n) {
            count -= 1
            if(count == 0) {
                res = n
                count = 1
            }
        }
        else {
            count += 1
        }
    }
    return res
};

// Input: nums = [3,2,3]
// Output: 3
