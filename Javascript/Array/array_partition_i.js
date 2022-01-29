//https://leetcode.com/problems/array-partition-i/submissions/

var arrayPairSum = function(nums) {
    
    nums = nums.sort((a,b) => a-b)
    let summ = nums.reduce((prev,curr,idx) => {
        if( idx%2 == 0) {
            return prev + curr
        }
        else{
            return prev
        }
    })
    return summ
};

//Sort by increasing and sum up ([0,1],[2,3],[4,5]...pairs)

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4