//https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/

var findKthLargest = function (nums, k) {
    // ============ Min Heap Class
    class MinHeap {
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }

        add(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length - 1);
            if (this.value.length > this.capacity) this.remove();
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

            if (parent >= 0 && this.value[parent] > this.value[max])
                max = parent;

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
    const minHeap = new MinHeap(k);

    for (let n of nums) minHeap.add(n);

    return minHeap.remove();
};

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
