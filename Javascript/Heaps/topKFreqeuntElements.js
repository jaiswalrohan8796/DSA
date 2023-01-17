//https://leetcode.com/problems/top-k-frequent-elements/description/

var topKFrequent = function (nums, k) {
    if (!nums || nums.length == 0) return [];
    let heap = new MaxHeap();
    let hmap = new Map();
    for (let n of nums) {
        if (!hmap.has(n)) {
            hmap.set(n, 1);
        } else {
            hmap.set(n, hmap.get(n) + 1);
        }
    }
    for (let [k, v] of hmap) {
        heap.add(k, v);
    }
    let ans = [];
    while (k--) {
        ans.push(heap.remove().val);
    }
    return ans;
};

class Data {
    constructor(val, key) {
        this.val = val;
        this.key = key;
    }
}

class MaxHeap {
    constructor() {
        this.arr = [];
    }
    size() {
        return this.arr.length;
    }
    swap(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
    add(val, key) {
        let data = new Data(val, key);
        this.arr.push(data);
        this.heapifyUp(this.size() - 1);
    }
    remove() {
        this.swap(0, this.size() - 1);
        let maxx = this.arr.pop();
        this.heapifyDown(0);
        return maxx;
    }
    heapifyUp(idx) {
        let curr = idx;
        let parent = ~~((idx - 1) / 2);
        while (parent >= 0 && this.arr[parent].key < this.arr[curr].key) {
            curr = parent;
        }
        if (idx != curr) {
            this.swap(idx, curr);
            this.heapifyUp(curr);
        }
    }

    heapifyDown(idx) {
        let curr = idx;
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        if (left < this.size() && this.arr[left].key > this.arr[curr].key) {
            curr = left;
        }
        if (right < this.size() && this.arr[right].key > this.arr[curr].key) {
            curr = right;
        }
        if (idx != curr) {
            this.swap(idx, curr);
            this.heapifyDown(curr);
        }
    }
}
