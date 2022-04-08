//https://www.digitalocean.com/community/tutorials/js-binary-heaps

function MaxHeap() {
    //to represent heap we use 1-based index array.Null as first element (ignore)
    this.heap = [null];
}

MaxHeap.prototype.print = function () {
    //print the array representation of the heap
    console.log(this.heap.slice(1));
};

MaxHeap.prototype.insert = function (value) {
    //insert at the end of the array/(add leaf at last node)
    this.heap.push(value);
    //this may disturb the heap property, so heapify
    this.heapifyBottomUp();
};

MaxHeap.prototype.heapifyBottomUp = function () {
    if (this.heap.length <= 1) return;
    let current = this.heap.length - 1;
    //looping over from leaf to root node, make sure parent node > current node
    while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] < this.heap[current]
    ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
            this.heap[current],
            this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
    }
};

MaxHeap.prototype.heapifyTopDown = function () {
    let curr = 1;
    let left = Math.floor(curr / 2);
    let right = Math.floor(curr / 2) + 1;
    while (this.heap[left] && this.heap[right]) {
        if (this.heap[left] > this.heap[right]) {
            if (this.heap[curr] < this.heap[left]) {
                [this.heap[curr], this.heap[left]] = [
                    this.heap[left],
                    this.heap[curr],
                ];
                curr = left;
            }
        } else {
            if (this.heap[curr] < this.heap[right]) {
                [this.heap[curr], this.heap[right]] = [
                    this.heap[right],
                    this.heap[curr],
                ];
                curr = right;
            }
        }
        left = curr * 2;
        right = curr * 2 + 1;
    }
};
MaxHeap.prototype.delete = function () {
    //delete the root(1st element) & place the last element of array at its position
    this.heap.splice(1, 1, this.heap.pop()); // remember first elem is null.

    //after this modification heap property me be disturbed, so heapify
    this.heapifyTopDown();
};

hp = new MaxHeap();
hp.insert(1); // [1]
hp.insert(2); // [2, 1]
hp.insert(4); // [4, 1, 2]
hp.insert(7); // [7, 4, 2, 1]
hp.insert(3); // [7, 4, 2, 1, 3]
hp.insert(6); // [7, 4, 6, 1, 3, 2]

hp.print(); // [ 7, 4, 6, 1, 3, 2 ]

hp.delete(); // [ 6, 4, 2, 1, 3 ]
hp.delete(); // [ 4, 3, 2, 1 ]

hp.print(); // // [ 4, 3, 2, 1 ]

class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    add(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    size() {
        return this.data.length;
    }
}
