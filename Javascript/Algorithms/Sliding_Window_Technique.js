//SLIDING WINDOW TECHNIQUE

//Sliding window is a technique used for finding contigous sub-sequence from a larger sequence that satisfies the given condition
//Window can be statically sized or dynamic depending on the problem
//Maintain a subset (window) of your required size & move that window till you find the solution
//Usually has O(N)

//Fixed Size Sliding window

//Find the maximum sum sub-array of length k in an given array

let nums = [-1, 3, 1, 4, -2, 1, 0, -1, 5, 4, 3, -1, 0, -5, 6, 3, 2];
let k = 3;

function maxSum(nums, k) {
    let start = 0;
    let end = k - 1;
    let maxm = Number.MIN_SAFE_INTEGER; // Most minimum number possible

    //Calculating the sum of first window (0,k-1). So that we wont need to calc. sum after every step
    let sum = nums.slice(start, end + 1).reduce((acc, v) => acc + v, 0);
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxm = Math.max(maxm, sum);
    }
    return maxm;
}

console.log(maxSum(nums, k));

//Variable Size Sliding window

//Find the sub-arrays that adds up to the given numbers

let array = [1, 7, 4, 3, 1, 2, 1, 5, 0];
let target = 7;

function targetSum(nums, target) {
    let res = [];
    let start = 0;
    let end = 0;
    let currSum = 0;
    while (start < nums.length && end < nums.length) {
        if (currSum == target) {
            res.push([start, end - 1]);

            if (end <= nums.length - 1) {
                currSum += nums[end];
                end++;
            }
        } else {
            if (currSum > target) {
                currSum -= nums[start];
                start++;
            } else {
                if (end <= nums.length - 1) {
                    currSum += nums[end];
                    end++;
                }
            }
        }
    }
    return res;
}

console.log(targetSum(array, target));
