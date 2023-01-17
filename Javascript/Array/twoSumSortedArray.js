//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

//Two Pointers low & high

var twoSum = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1
    while(l < r) {
        let currSum = (numbers[l] + numbers[r])
        if( currSum == target) {
            return [l+1, r+1]
        }
        if(currSum > target) {
            r--
        }
        else {
            l++
        }
    }
};
