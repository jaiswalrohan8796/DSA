//https://leetcode.com/problems/last-stone-weight/

var lastStoneWeight = function (stones) {
    let hp = new MaxHeap();
    for (let wei of stones) {
        hp.add(wei);
    }
    //hp.print()
    while (hp.size() > 1) {
        let x = hp.remove();
        let y = hp.remove();
        if (x != y) {
            if (y > x) hp.add(y - x);
            else hp.add(x - y);
        }
    }
    if (hp.size() > 0) return hp.remove();
    return 0;
};

class MaxHeap {
    constructor() {
        this.arr = [];
    }
    print() {
        for (let val of this.arr) {
            console.log(val);
        }
    }
    size() {
        return this.arr.length;
    }
    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
    add(val) {
        this.arr.push(val);
        this.heapifyUp(this.size() - 1);
    }
    remove() {
        this.swap(0, this.size() - 1);
        const max = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }
    heapifyUp(i) {
        let curr = i;
        let parent = Math.floor((i - 1) / 2);

        if (parent >= 0 && this.arr[curr] > this.arr[parent]) curr = parent;

        if (curr !== i) {
            this.swap(curr, i);
            this.heapifyUp(curr);
        }
    }
    heapifyDown(i) {
        let curr = i;
        let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;

        if (leftChild < this.size() && this.arr[curr] < this.arr[leftChild])
            curr = leftChild;
        if (rightChild < this.size() && this.arr[curr] < this.arr[rightChild])
            curr = rightChild;

        if (curr !== i) {
            this.swap(curr, i);
            this.heapifyDown(curr);
        }
    }
}
