//https://leetcode.com/problems/3sum/submissions/

var threeSum = function(nums) {
    const res = []
    if(nums.length < 3) return res
    nums.sort((a,b) => a-b)
    const target = 0
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i-1]) continue
        let j = i+1
        let k = nums.length - 1
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if(sum == target) {
                res.push([nums[i], nums[j], nums[k]])
                while(j < k && nums[j] === nums[j+1]) j++
                while( k > j && nums[k] === nums[k-1]) k--
                j++
                k--
            }
            else if(sum < target) {
                j++
            }
            else {
                k--
            }
        }
    }
    return res
};

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

//Intuition
//This is similar to Two Sum problem => a {fixed} + (b + c) {two sum problem}
//0. Sort the array (asc)
//1. Make a for loop to iterate over a (0 -> n - 1)
//2. For two sum our range becomes (i+1 -> n-1)
//3. Use two sum algo for finding the two numbers(b + c) that together with (a) sums to 0
//4. make sure the two sum are not repeated. Use while loop to iterate untill next unique value
//5. after the two sum algo ends, check if next a == prev a, increment i untill unique
