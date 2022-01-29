//https://leetcode.com/problems/two-out-of-three/submissions/

var twoOutOfThree = function (nums1, nums2, nums3) {
    let ans = [];
    for (let n1 of nums1) {
        if (nums2.includes(n1) || nums3.includes(n1)) {
            if (!ans.includes(n1)) {
                ans.push(n1);
            }
        }
    }
    for (let n2 of nums2) {
        if (nums1.includes(n2) || nums3.includes(n2)) {
            if (!ans.includes(n2)) {
                ans.push(n2);
            }
        }
    }
    for (let n3 of nums3) {
        if (nums2.includes(n3) || nums1.includes(n3)) {
            if (!ans.includes(n3)) {
                ans.push(n3);
            }
        }
    }
    return ans;
};

/*
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2. 
*/
