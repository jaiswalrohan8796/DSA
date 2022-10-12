class MinHeap {
    constructor() {
        this.value = [];
    }

    add(val) {
        this.value.push(val);
        this.bubbleUp(this.value.length - 1);
    }

    remove() {
        this.swap(0, this.value.length - 1);
        const min = this.value.pop();
        this.trickleDown(0);
        return min;
    }

    bubbleUp(idx) {
        const parent = Math.floor((idx - 1) / 2);
        let max = idx;

        if (parent >= 0 && this.value[parent] > this.value[max]) max = parent;

        if (max !== idx) {
            this.swap(max, idx);
            this.bubbleUp(max);
        }
    }

    trickleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let min = idx;

        if (
            leftChild < this.value.length &&
            this.value[leftChild] < this.value[min]
        )
            min = leftChild;
        if (
            rightChild < this.value.length &&
            this.value[rightChild] < this.value[min]
        )
            min = rightChild;

        if (min !== idx) {
            this.swap(min, idx);
            this.trickleDown(min);
        }
    }

    swap(i, j) {
        [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }
}

class MaxHeap {
    constructor() {
        this.value = [];
    }

    add(val) {
        this.value.push(val);
        this.bubbleUp(this.value.length - 1);
    }

    remove() {
        this.swap(0, this.value.length - 1);
        const max = this.value.pop();
        this.trickleDown(0);
        return max;
    }

    bubbleUp(idx) {
        const parent = Math.floor((idx - 1) / 2);
        let min = idx;

        if (parent >= 0 && this.value[parent] < this.value[min]) min = parent;

        if (min !== idx) {
            this.swap(min, idx);
            this.bubbleUp(min);
        }
    }

    trickleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let max = idx;

        if (
            leftChild < this.value.length &&
            this.value[leftChild] > this.value[max]
        )
            max = leftChild;
        if (
            rightChild < this.value.length &&
            this.value[rightChild] > this.value[max]
        )
            max = rightChild;

        if (max !== idx) {
            this.swap(max, idx);
            this.trickleDown(max);
        }
    }

    swap(i, j) {
        [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }
}

// let pq = new MinHeap();
// pq.add(4);
// pq.add(6);
// pq.add(10);
// pq.add(2)

// console.log(pq.remove());
