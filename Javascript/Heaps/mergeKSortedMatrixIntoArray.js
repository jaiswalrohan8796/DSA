//https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/

class MinHeap {
    constructor() {
        this.arr = []
    }
    add(val) {
        this.arr.push(val)
        this.heapifyUp(this.arr.length-1)
    }
    remove() {
        this.swap(0, this.arr.length-1)
        let popped = this.arr.pop()
        this.heapifyDown(0)
        return popped
    }
    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
    }
    
    heapifyUp(idx) {
        let smallest = idx
        let parent = Math.floor((idx-1)/2)
        if(parent >= 0 && this.arr[parent] > this.arr[smallest]) {
            smallest = parent
        }
        if(idx != smallest) {
            this.swap(idx, smallest)
            this.heapifyUp(smallest)
        }
    }
    
    heapifyDown(idx) {
        let smallest = idx
        let l = 2*(idx) + 1
        let r = 2*(idx) + 2
        if(l < this.arr.length && this.arr[l] < this.arr[smallest]) {
            smallest = l
        }
        if(r < this.arr.length && this.arr[r] < this.arr[smallest]) {
            smallest = r
        }
        if(idx != smallest) {
            this.swap(idx, smallest)
            this.heapifyDown(smallest)
        }
    }
    
    isEmpty() {
        return this.arr.length == 0
    }
    
}

class Solution {
    mergeKArrays(arr,K){
        //code here
        //build
        let mn = new MinHeap()
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                mn.add(arr[i][j])
            }
        }
        //extract
        let ans = []
        while(!mn.isEmpty()) {
            ans.push(mn.remove())
        }
        return ans
    }
}
