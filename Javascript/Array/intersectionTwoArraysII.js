//https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

var intersect = function (nums1, nums2) {
    let res = [];
    let nums2map = {};
    for (let i = 0; i < nums2.length; i++) {
        nums2map[nums2[i]] = nums2map[nums2[i]] ? nums2map[nums2[i]] + 1 : 1;
    }
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in nums2map) {
            res.push(nums1[i]);
            if (nums2map[nums1[i]] == 1) {
                delete nums2map[nums1[i]];
            } else {
                nums2map[nums1[i]] -= 1;
            }
        }
    }
    return res;
};

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
