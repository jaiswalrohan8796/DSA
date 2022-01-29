//https://leetcode.com/problems/count-good-triplets/submissions/

var countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a) {
                    if (Math.abs(arr[j] - arr[k]) <= b) {
                        if (Math.abs(arr[i] - arr[k]) <= c) {
                            count++;
                        }
                    }
                }
            }
        }
    }
    return count;
};

/*
Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)]. 
*/
