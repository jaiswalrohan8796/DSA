//https://leetcode.com/problems/next-greater-element-i/submissions/

//Brute Force
var nextGreaterElement = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i]);
        // console.log(`Found ${nums1[i]} at ${idx}`)
        while (idx < nums2.length && nums1[i] >= nums2[idx]) {
            idx += 1;
        }
        // console.log(`NGE : ${idx}`)
        ans.push(idx < nums2.length ? nums2[idx] : -1);
    }
    return ans;
};

//General Solution for NGE using stack O(n)
var nextGreaterElements = function (nums) {
    let res = new Array(nums.length);
    let stack = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1];
        } else {
            res[i] = -1;
        }
        stack.push(nums[i]);
    }
    console.log(res);
    return res;
};

//O(n + m)
//Using stack to keep track of NGE for only required nums1.

var nextGreaterElement = function (nums1, nums2) {
    let hmap = new Map();
    for (let i = 0; i < nums1.length; i++) {
        hmap.set(nums1[i], i);
    }
    let res = new Array(nums1.length).fill(-1);
    let stack = [];
    for (let i = 0; i < nums2.length; i++) {
        let curr = nums2[i];
        while (stack.length > 0 && curr > stack[stack.length - 1]) {
            let temp = stack.pop();
            let idx = hmap.get(temp);
            res[idx] = curr;
        }
        if (hmap.has(curr)) {
            stack.push(curr);
        }
    }
    return res;
};

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
