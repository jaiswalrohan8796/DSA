//https://leetcode.com/problems/container-with-most-water/submissions/

var maxArea = function (height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = (right - left) * minHeight;
        result = Math.max(result, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
