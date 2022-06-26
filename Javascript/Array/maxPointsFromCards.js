//https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/submissions/

var maxScore = function (cardPoints, k) {
    let maxSum = 0;
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += cardPoints[i];
    }
    maxSum = Math.max(maxSum, currSum);
    let start = k - 1;
    let end = cardPoints.length - 1;
    while (k--) {
        currSum -= cardPoints[start];
        start--;
        currSum += cardPoints[end];
        end--;
        console.log(currSum);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

//more readable approach

var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    //remaining sub-array length which should be minimum
    let len = n - k;
    let total = cardPoints.reduce((acc, v) => acc + v, 0);
    let start = 0;
    let end = len;
    let sum = cardPoints.slice(start, end).reduce((acc, v) => acc + v, 0);
    let minsum = sum;
    for (let i = len; i < n; i++) {
        sum += cardPoints[i] - cardPoints[i - len];
        minsum = Math.min(minsum, sum);
    }
    //return maximum sum 
    return total - minsum;
};

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

//Intuition
//Use sliding window technique with width = k
//Initially get window from the start 0th -> (k-1)th
//Save sum
//Iterate backwords and move window to left k times & save the max sum
//return max sum
