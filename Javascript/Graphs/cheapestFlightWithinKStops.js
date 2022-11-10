//https://leetcode.com/problems/cheapest-flights-within-k-stops/description/


//Standard BFS => TLE :(

var findCheapestPrice = function(n, flights, src, dst, k) {
    let G = new Map()
    for(let edge of flights) {
        if(!G.has(edge[0])) G.set(edge[0], [])
        if(!G.has(edge[1])) G.set(edge[1], [])
        G.get(edge[0]).push([edge[1], edge[2]])
    }
    let stops = -1
    let cost = Infinity
    let que = new MyQueue()
    que.enqueue([src, 0])
    while(que.length > 0) {
        let size = que.length()
        for(let i = 0; i < size; i++) {
            let [curr, currCost] = que.dequeue()
            if(curr == dst) {
                cost = Math.min(cost, currCost)
            }
            for(let [nei, w] of G.get(curr)) {
                if((currCost + w) > cost) {
                    continue
                }
                else {
                    que.enqueue([nei, currCost + w])
                }
            }
        }
        stops += 1
        if(stops > k) break
    }
    return cost == Infinity ? -1 : cost
};

//Dijkstra's => TLE :(


var findCheapestPrice = function(n, flights, src, dst, k) {
    let G = new Map()
    for(let edge of flights) {
        if(!G.has(edge[0])) G.set(edge[0], [])
        if(!G.has(edge[1])) G.set(edge[1], [])
        G.get(edge[0]).push([edge[1], edge[2]])
    }
    let stops = -1
    let cost = Infinity
    let que = new MinHeap()
    que.add([src, 0])
    while(que.size() > 0) {
        let size = que.size()
        for(let i = 0; i < size; i++) {
            let node = que.remove()
            let curr = node.val[0]
            let weight = node.val[1]
            if(curr == dst && stops <= k) {
                cost = Math.min(cost, weight)
            }
            for(let [nei, w] of G.get(curr)) {
                if((weight + w) > cost) {
                    continue
                }
                else {
                    que.add([nei, weight + w])
                }
            }
        }
        stops += 1
    }
    return cost == Infinity ? -1 : cost
};

class Data {
    constructor(val, key) {
        this.val = val;
        this.key = key;
    }
}

class MinHeap {
    constructor() {
        this.arr = [];
    }
    print() {
        let ans = "";
        for (let data of this.arr) {
            console.log(data);
        }
    }
    peek() {
        return this.arr[0]
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


