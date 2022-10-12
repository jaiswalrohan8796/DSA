//https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/

class MaxHeap {
    constructor(cap) {
        this.cap = cap;
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

var findKthLargest = function (nums, k) {
    let mx = new MaxHeap();
    for (let n of nums) {
        mx.add(n);
    }
    for (let j = 0; j < k - 1; j++) {
        mx.remove();
    }
    return mx.remove();
};
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
