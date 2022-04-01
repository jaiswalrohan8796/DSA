//https://leetcode.com/problems/max-consecutive-ones-iii/submissions/

var longestOnes = function (nums, k) {
    let low = 0;
    let high = 0;
    let curr = [];
    let o_count = 0;
    let maxm = -Infinity;
    while (high < nums.length && low < nums.length) {
        if (nums[high] == 1) {
            curr.push(nums[high]);
            high++;
        } else if (nums[high] == 0 && o_count < k) {
            curr.push(nums[high]);
            o_count++;
            high++;
        } else {
            if (k > 1) {
                while (o_count != k - 1) {
                    is_o = curr.shift();
                    low++;
                    if (is_o == 0) {
                        o_count--;
                    }
                }
                curr.push(nums[high]);
                o_count++;
                high++;
            } else {
                curr.length = 0
                high++;
            }
        }
        maxm = Math.max(maxm, curr.length);
    }
    return maxm;
};

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
//                         ------------
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

//Intuition
//Sliding window technique
//expand the window while count 0 is equal to k
//when count 0 exceeds k then shrink from backwords untill the count becomes k again
//keep saving the maximum k length untill it reaches the end
