//https://leetcode.com/problems/top-k-frequent-words/submissions/

var topKFrequent = function (words, k) {
    let map = new Map();
    for (let word of words) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    let hp = new MaxHeap();

    for (let [k, v] of map) {
        hp.add(k, v);
    }
    //hp.print()
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(hp.remove().val);
    }
    return res;
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
        if (parent >= 0 && this.arr[parent].key <= this.arr[curr].key) {
            if (this.arr[parent].key < this.arr[curr].key) {
                curr = parent;
            } else if (
                this.arr[curr].val.localeCompare(this.arr[parent].val) == -1
            ) {
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

        if (left < this.size() && this.arr[left].key >= this.arr[curr].key) {
            if (this.arr[left].key > this.arr[curr].key) {
                curr = left;
            } else if (
                this.arr[curr].val.localeCompare(this.arr[left].val) == 1
            ) {
                curr = left;
            }
        }
        if (right < this.size() && this.arr[right].key >= this.arr[curr].key) {
            if (this.arr[right].key > this.arr[curr].key) {
                curr = right;
            } else if (
                this.arr[curr].val.localeCompare(this.arr[right].val) == 1
            ) {
                curr = right;
            }
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}
