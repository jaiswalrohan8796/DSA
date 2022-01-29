//https://leetcode.com/problems/search-insert-position/


// O(n)
var searchInsert = function (nums, target) {
    let pos = 0;
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        while (pos < nums.length) {
            if (target < nums[pos]) {
                return pos;
            }
            pos++;
        }
    }
    return pos;
};

// O(log n)
var searchInsert = function(nums, target) {
    let rec = (arry,x,start,end) => {
        if (start > end) {
            return end
        }
        
        let mid = Math.floor((start + end)/2)
        
        if (x == arry[mid]) {
            return mid
        }
        
        if (x < arry[mid]) {
            if (x > arry[mid-1]) {
                return mid
            }
            rec(arry,x,start,mid-1)
        } 
        else if(x > arry[mid]) {
            if (x < arry[mid+1]) {
                return mid
            }
            rec(arry,x,mid+1,end)
        }
    }
    
    return rec(nums,target,0,nums.length)
};