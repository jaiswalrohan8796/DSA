//https://leetcode.com/problems/k-closest-points-to-origin/

var kClosest = function (points, k) {
    let hp = new MinHeap();
    for (let [x, y] of points) {
        hp.add([x, y], Math.sqrt(x ** 2 + y ** 2));
    }
    //hp.print()
    let ans = [];
    while (k > 0) {
        ans.push(hp.remove().data);
        k -= 1;
    }
    return ans;
};

class Node {
    constructor(data, key) {
        this.data = data;
        this.key = key;
    }
}

class MinHeap {
    constructor() {
        this.arr = [];
    }
    print() {
        for (let node of this.arr) {
            console.log(node);
        }
    }
    size() {
        return this.arr.length;
    }
    swap(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
    add(data, key) {
        let node = new Node(data, key);
        this.arr.push(node);
        this.heapifyUp(this.size() - 1);
    }
    remove() {
        this.swap(0, this.size() - 1);
        let min = this.arr.pop();
        this.heapifyDown(0);
        return min;
    }
    heapifyUp(i) {
        let curr = i;
        let parent = Math.floor((i - 1) / 2);
        if (parent >= 0 && this.arr[curr].key < this.arr[parent].key) {
            curr = parent;
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyUp(curr);
        }
    }
    heapifyDown(i) {
        let curr = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < this.size() && this.arr[curr].key > this.arr[left].key) {
            curr = left;
        }
        if (right < this.size() && this.arr[curr].key > this.arr[right].key) {
            curr = right;
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}
