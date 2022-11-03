//https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions
class Solution {
    spanningTree(arr, v, e) {
        function addEdges(index) {
            for (let [dest, weight] of gp.get(index)) {
                if (!set.has(dest)) {
                    hp.add(dest, weight);
                }
            }
        }
        let vertexCount = 0;
        let gp = new Map();
        for (let edge of arr) {
            let s = Number(edge[0]);
            let d = Number(edge[1]);
            let w = Number(edge[2]);
            if (!gp.has(s)) {
                gp.set(s, new Array());
            }
            if (!gp.has(d)) {
                gp.set(d, new Array());
            }
            let s_list = gp.get(s);
            s_list.push([d, w]);
            let d_list = gp.get(d);
            d_list.push([s, w]);
            gp.set(s, [...s_list]);
            gp.set(d, [...d_list]);
        }
        //console.log(gp)
        let totalWeight = 0;
        let hp = new MinHeap();
        let set = new Set();
        set.add(0);
        addEdges(0);
        while (set.size != v) {
            let node = hp.remove();
            let dest = node.val;
            let weight = node.key;
            if (set.has(dest)) {
                continue;
            }
            set.add(dest);
            totalWeight += weight;
            addEdges(dest);
        }
        return totalWeight;
    }
}

class Data {
    constructor(val, key) {
        this.val = val;
        this.key = key;
    }
}

class MinHeap {
    constructor() {
        this.arr = [];
    }
    print() {
        let ans = "";
        for (let data of this.arr) {
            console.log(data);
        }
    }
    peek() {
        return this.arr[0];
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
        let max = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyUp(i) {
        let curr = i;
        let parent = ~~((i - 1) / 2);
        if (parent >= 0 && this.arr[parent].key > this.arr[curr].key) {
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

        if (left < this.size() && this.arr[left].key < this.arr[curr].key) {
            curr = left;
        }
        if (right < this.size() && this.arr[right].key < this.arr[curr].key) {
            curr = right;
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}
