//https://leetcode.com/problems/3sum/submissions/

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high) {
            if (nums[i] + nums[low] + nums[high] == 0) {
                ans.push([nums[i], nums[low], nums[high]]);
                while (low < high && nums[low] == nums[low + 1]) {
                    low++;
                }
                while (low < high && nums[high] == nums[high - 1]) {
                    high--;
                }
                low++;
                high--;
                continue;
            }
            if (nums[i] + nums[low] + nums[high] < 0) {
                low++;
            } else {
                high--;
            }
        }
        while (i < nums.length && nums[i + 1] == nums[i]) {
            i++;
        }
    }
    return ans;
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
