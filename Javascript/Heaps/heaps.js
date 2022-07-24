class MinHeap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }
    getLeftChildIndex(idx) {
        return 2 * idx + 1;
    }
    getRightChildIndex(idx) {
        return 2 * idx + 2;
    }
    hasParent(idx) {
        return this.getParentIndex(idx) >= 0;
    }
    hasLeftChild(idx) {
        return this.getLeftChildIndex(idx) < this.size;
    }
    hasRightChild(idx) {
        return this.getRightChildIndex(idx) < this.size;
    }
    parent(idx) {
        return this.storage[this.getParentIndex(idx)];
    }
    leftChild(idx) {
        return this.storage[this.getLeftChildIndex(idx)];
    }
    rightChild(idx) {
        return this.storage[this.getRightChildIndex(idx)];
    }
    swap(idx1, idx2) {
        let temp = this.storage[idx1];
        this.storage[idx1] = this.storage[idx2];
        this.storage[idx2] = temp;
    }
    heapifyUp(idx) {
        while (
            this.getParentIndex(idx) &&
            this.parent[idx] > this.storage[idx]
        ) {
            this.swap(this.getParentIndex(idx), idx);
        }
        idx = this.getParentIndex(idx);
    }
    heapifyDown(idx) {
        while (this.hasLeftChild(idx)) {
            let smallerChild = this.getLeftChildIndex(idx);
            if (
                this.getRightChildIndex(idx) &&
                this.rightChild[idx] < this.leftChild[idx]
            ) {
                smallerChild = this.getRightChildIndex(idx);
            }
            if (this.storage[idx] < this.storage[smallerChild]) {
                break;
            } else {
                this.swap(idx, smallerChild);
            }
            idx = smallerChild;
        }
    }
    heapifyUpRecursive(idx) {
        if (this.getParentIndex(idx) && this.parent(idx) > this.storage[idx]) {
            this.swap(this.getParentIndex(idx), idx);
            this.heapifyUpRecursive(this.getParentIndex(idx));
        }
    }
    push(val) {
        this.storage[this.size] = val;
        this.size++;
        this.heapifyUp(this.size - 1);
    }
    pop() {
        if (this.size != 0) {
            let min = this.storage[0];
            this.storage[0] = this.storage[this.size - 1];
            this.size -= 1;
            this.heapifyDown(0);
            return min;
        }
    }
    print() {
        console.log(this.storage)
    }
}



let mn = new MinHeap()
mn.push(2)
mn.push(4)
mn.push(1)
mn.print()
console.log(mn.pop())
mn.push(5)
console.log(mn.pop())
