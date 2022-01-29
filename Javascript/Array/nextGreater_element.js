//https://leetcode.com/problems/next-greater-element-i/submissions/

var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    for(let i = 0; i < nums1.length; i++) {
        let n = nums1[i]
        let pos = nums2.indexOf(n)
        let temp = -1
        for(let j = pos + 1; j < nums2.length; j++) {
            if(nums2[j] > n) {
                temp = nums2[j]
                break
            }
        }
        ans.push(temp)
    }
    return ans
};

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.