//https://practice.geeksforgeeks.org/problems/minimum-swaps/1?page=1&category[]=Graph&sortBy=submissions

class Solution {
    //Function to find the minimum number of swaps required to sort the array.
    minSwaps(nums) {
        // code here
        let arr = new Array(nums.length);
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            arr[i] = nums[i];
            map.set(nums[i], i);
        }
        arr.sort((a, b) => a - b);
        let ans = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != arr[i]) {
                let idx = map.get(arr[i]);
                let tmp = nums[i];
                nums[i] = nums[idx];
                nums[idx] = tmp;
                ans += 1;
                map.set(nums[i], i);
                map.set(nums[idx], idx);
            }
        }
        return ans;
    }
}
