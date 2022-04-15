//https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/submissions/

var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    horizontalCuts = [0, ...horizontalCuts.sort((a, b) => a - b), h];
    verticalCuts = [0, ...verticalCuts.sort((a, b) => a - b), w];
    let horimax = 1;
    let vertimax = 1;
    for (let i = 1; i < horizontalCuts.length; i++) {
        horimax = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], horimax);
    }
    for (let i = 1; i < verticalCuts.length; i++) {
        vertimax = Math.max(verticalCuts[i] - verticalCuts[i - 1], vertimax);
    }
    return (BigInt(vertimax) * BigInt(horimax)) % 1000000007n;
};

// Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
// Output: 4
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.

//Intuition
//Sort the arrays
//Compute the difference between adjacent values ( start = 0, end = full heigh/full width)
//return product of max horizontal & vertical
//use BigInt & modulo 1e9 + 7
