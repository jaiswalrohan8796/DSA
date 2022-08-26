//https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/

function nextLargerElement(arr, n) {
    // code here
    let stack = [];
    let ans = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length != 0) {
            ans[i] = stack[stack.length - 1];
        } else {
            ans[i] = -1;
        }
        stack.push(arr[i]);
    }
    return ans;
}

// For circular array
var nextGreaterElements = function (nums) {
    function nextLargerElement(arr, n) {
        // code here
        let stack = [];
        let ans = new Array(n);
        for (let i = 2 * n - 1; i >= 0; i--) {
            while (
                stack.length != 0 &&
                stack[stack.length - 1] <= arr[Math.floor(i % n)]
            ) {
                stack.pop();
            }
            if (i < n) {
                if (stack.length != 0) {
                    ans[i] = stack[stack.length - 1];
                } else {
                    ans[i] = -1;
                }
            }
            stack.push(arr[Math.floor(i % n)]);
        }
        return ans;
    }
    return nextLargerElement(nums, nums.length);
};
