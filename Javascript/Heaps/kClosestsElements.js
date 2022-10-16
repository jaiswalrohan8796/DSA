//https://leetcode.com/problems/find-k-closest-elements/submissions/

var findClosestElements = function (arr, k, x) {
    let hp = new MinHeap();
    for (let val of arr) {
        hp.add(val, Math.abs(val - x));
    }
    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(hp.remove().val);
    }
    return ans.sort((a, b) => a - b);
};

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
            ans += `${data.val}-${data.key} -> `;
        }
        console.log(ans);
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
        if (parent >= 0 && this.arr[parent].key == this.arr[curr].key) {
            if (this.arr[parent].val > this.arr[curr].val) {
                curr = parent;
            }
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
        if (left < this.size() && this.arr[left].key == this.arr[curr].key) {
            if (this.arr[left].val < this.arr[curr].val) {
                curr = left;
            }
        }
        if (right < this.size() && this.arr[right].key < this.arr[curr].key) {
            curr = right;
        }
        if (right < this.size() && this.arr[right].key == this.arr[curr].key) {
            if (this.arr[right].val < this.arr[curr].val) {
                curr = right;
            }
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}
