//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/

var repeatedNTimes = function(nums) {
    let t = (nums.length/2)
    let mapper = {}
    for(let i = 0; i < nums.length; i++) {
       if (nums[i] in mapper) {
           mapper[nums[i]] += 1
       }
        else {
            mapper[nums[i]] = 1
        }
    }
    for(let [key,value] of Object.entries(mapper)) {
        if (t == value) {
            return +(key)
        }
    }
};


// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3