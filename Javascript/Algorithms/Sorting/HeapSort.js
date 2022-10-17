//https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length
    //start heapifying from lowest parent up till root
    for(let i = Math.floor((n-1)/2); i >= 0 ; i--) {
        heapifyDown(nums, n, i)
    }
    //removing max to end of the array & reducing array size by 1
    for(let j = n - 1; j > 0 ; j--) {
        swap(nums, j, 0)
        heapifyDown(nums, j, 0)
    }
    return nums
};


function heapifyDown(arr, n, i) {
    let curr = i
    let left = 2*(i) + 1
    let right = 2*(i) + 2
    
    if(left < n && arr[left] > arr[curr]) {
        curr = left
    }
    if(right < n && arr[right] > arr[curr]) {
        curr = right
    }
    if(i != curr) {
        swap(arr, i, curr)
        heapifyDown(arr, n, curr)
    }
}

function swap(arr, i , j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
