// Kadane's Algorithm O(N)
//It is used to find the maximum sum contigous sub-array from an array.
//Logic is : -
// for each element of the array
//calc current sum & replace if greater than maximum sum
//if current sum < 0 , let current sum = 0

var maxSubArray = function (A) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let curSum = 0;
    for (let i = 0; i < A.length; i++) {
        curSum += A[i];
        if (curSum > maxSum) maxSum = curSum;
        if (curSum < 0) curSum = 0;
    }
    return maxSum;
};
