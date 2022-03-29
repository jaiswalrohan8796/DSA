//TWO POINTER ALGORITHM
//Use Case :- To find a pair (by condition) in a sorted array
//Big-O: - O(n)

//Question
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/

var twoSum = function (numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        if (numbers[low] == target - numbers[high]) {
            return [low + 1, high + 1];
        }
        if (numbers[low] < target - numbers[high]) {
            low++;
        } else {
            high--;
        }
    }
};

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

//Intuition
//Use two pointer algorithm to check low & high elements.
//loop while low pointer < high pointer
//If target is less than sum(low + high) increase low pointer, else decrease high pointer
