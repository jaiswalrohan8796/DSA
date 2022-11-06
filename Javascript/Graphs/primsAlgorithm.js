//https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions

//Time Out
class Solution {
    spanningTree(arr, v, e) {
        // code here
        function addEdges(node) {
            for (let edge of gp.get(node)) {
                hp.add(edge, edge[1]);
            }
        }
        // code here
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
            gp.get(s).push([d, w]);
            gp.get(d).push([s, w]);
        }
        let totalWeight = 0;
        let vis_set = new Set();
        let hp = new MinHeap();
        vis_set.add(1);
        addEdges(1);
        while (vis_set.size < v && hp.size() > 0) {
            let curr = hp.remove();
            let dest = curr.val[0];
            let weight = curr.val[1];
            if (vis_set.has(dest)) {
                continue;
            } else {
                vis_set.add(dest);
                totalWeight += weight;
                addEdges(dest);
            }
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
