//https://leetcode.com/problems/task-scheduler/submissions/

var leastInterval = function (tasks, n) {
    let freq = new Map();
    let max_heap = new MaxHeap();
    for (let t of tasks) {
        if (!freq.has(t)) {
            freq.set(t, 1);
        } else {
            freq.set(t, freq.get(t) + 1);
        }
    }
    for (let [key, val] of freq) {
        max_heap.add(val);
    }
    let time = 0;
    let que = [];
    while (max_heap.size() > 0 || que.length > 0) {
        //time
        time += 1;
        //most freq reduced by 1
        if (max_heap.size() > 0) {
            var curr = max_heap.remove();
            curr = curr - 1;
            //again appended if > 0 with time to call out
            if (curr > 0) {
                que.push([curr, time + n]);
            }
        }

        if (que.length > 0 && que[0][1] == time) {
            max_heap.add(que.shift()[0]);
        }
    }
    return time;
};

class MaxHeap {
    constructor() {
        this.value = [];
    }

    size() {
        return this.value.length;
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
