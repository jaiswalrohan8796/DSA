//https://leetcode.com/problems/merge-sorted-array/submissions/

var merge = function (nums1, m, nums2, n) {
    var insertPositionOfNums1 = m + n - 1;
    m -= 1;
    n -= 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[insertPositionOfNums1] = nums1[m];
            m -= 1;
        } else {
            nums1[insertPositionOfNums1] = nums2[n];
            n -= 1;
        }
        insertPositionOfNums1 -= 1;
    }
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
