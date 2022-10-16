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
        let max = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyUp(i) {
        let curr = i;
        let parent = ~~((i - 1) / 2);
        if (parent >= 0 && this.arr[parent].key < this.arr[curr].key) {
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

        if (left < this.size() && this.arr[left].key > this.arr[curr].key) {
            curr = left;
        }
        if (right < this.size() && this.arr[right].key > this.arr[curr].key) {
            curr = right;
        }
        if (i != curr) {
            this.swap(i, curr);
            this.heapifyDown(curr);
        }
    }
}


class MinHeap {
    constructor(compareFunction) {
        this.compare = compareFunction
        this.arr = [];
    }
    size() {
        return this.arr.length;
    }
    print() {
        let ans = ""
        for(let d of this.arr) {
            ans += `${d.val}:${d.key} -> `
        }
        console.log(ans)
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

function compareFunction(i, j) {

}

