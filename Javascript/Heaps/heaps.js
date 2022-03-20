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
