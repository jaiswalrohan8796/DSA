//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/


var searchRange = function(nums, target) {
    let res = [-1,-1]
    let i = 0;
    let j = nums.length - 1
    while(i < j) {
        let mid = Math.floor((i+j)/2)
        if(nums[mid] < target) i = mid + 1
        else j = mid
    }
    if(nums[i] != target) return res
    res[0] = i
    j = nums.length - 1
    while(i < j) {
        let mid = Math.floor((i+j)/2) + 1
        if(nums[mid] > target) j = mid - 1
        else i = mid
    }
    res[1] = j
    return res
};

var searchRange = function(nums, target) {
    function binSearch(low,high) {
        while(low <= high) {
            let mid = low + Math.floor((high - low)/2)
            if(nums[mid] == target) {
                while(mid > 0 && nums[mid-1] == target) {
                    mid = mid - 1
                }
                return mid
            }
            else if (nums[mid] < target) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
        return -1
    }
    function binSearchEnd(low,high) {
        while(low <= high) {
            let mid = low + Math.floor((high - low)/2)
            if(nums[mid] == target) {
                while(mid < high && nums[mid+1] == target) {
                    mid = mid + 1
                }
                return mid
            }
            else if (nums[mid] < target) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
        return -1
    }
    let ans = []
    let low = 0
    let high = nums.length - 1
    let first = binSearch(low,high)
    if(first < 0) {
        return [-1,-1]
    }
    else {
        ans.push(first)
        let second = binSearchEnd(first,high)
        ans.push(second)
        return ans
    }
};



// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
