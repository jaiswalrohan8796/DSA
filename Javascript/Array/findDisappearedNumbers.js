//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/

//Use Hashmaps Time : O(N) , Space : O(N)

var findDisappearedNumbers = function(nums) {
    let res = []
    let hmap = new Map()
    let maxx = nums.length
    for(let n of nums) {
        if(!hmap.has(n)) {
            hmap.set(n, 1)
        }
    }
    for(let i = 1; i <= nums.length; i++) {
        if(!hmap.has(i)) {
            res.push(i)
        }
    }
    return res
};

var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let curr  = Math.abs(nums[i])
        let idx = curr - 1
        if(nums[idx] > 0) {
            nums[idx] = nums[idx] * (-1)
        }
    }
    let res = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            res.push(i + 1)
        }
    }
    return res
};

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]



// For each value in the array mark its presence by making the number negative at that place in array
// eg. if you hae array [3,1,4,1] for 3, i will go to index 2 and make its value negative ie. now nums[2] becomes -4. present array: [3,1,-4,1]
// for 1, i will go to index 0 and make its value negative ie. now nums[0] becomes -3. present array: [-3,1,-4,1]
// for 4, (take abs value), i will go to index 3 and make its value negative ie. now nums[3] becomes -1. present array: [-3,1,-4,-1]
// for 1 take abs value), i will go to index 0 as it is already -ve do nothing. present array: [-3,1,-4,-1]
// At last I will have [-3,1,-4,-1]. now i will iterate over the array, whichever idx has positive value that number will not be in the array so as we have nums[1]>0 so 2 is not in the list.
