//https://leetcode.com/problems/sort-colors/submissions/

//My solution two O(N) pass
var sortColors = function(nums) {
    let red = 0
    let white  = 0
    let blue = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            red += 1
        }
        else if(nums[i] == 1) {
            white += 1
        }
        else {
            blue += 1
        }
    }
    let idx = 0
    while(red > 0) {
        nums[idx] = 0
        idx += 1
        red -= 1
    }
    while(white > 0) {
        nums[idx] = 1
        idx += 1
        white -= 1
    }
    while(blue > 0) {
        nums[idx] = 2
        idx += 1
        blue -= 1
    }
    return nums
};

//Intuition
//Sort using two pointers

var sortColors = function (nums) {
    if (nums.length <= 1) return nums;
    let left = 0;
    while (left < nums.length - 1) {
        let right = left + 1;
        while (right < nums.length) {
            if (nums[left] > nums[right]) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
            }
            right++;
        }
        left++;
    }
};

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]


