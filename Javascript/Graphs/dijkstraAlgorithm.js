//https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1?page=1&category[]=Graph&sortBy=submissions


class Solution
{
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    dijkstra(V,Adj,S)
    {
        //code here
        let gp = new Map()
        for(let i = 0; i < V; i++) {
            gp.set(i, Adj[i])
        }
        let pq = new MinHeap()
        let distance = new Array(V).fill(Infinity)
        distance[S] = 0
        pq.add(S, 0)
        while(pq.size() > 0) {
            let node = pq.remove()
            for(let [adj, weight ] of gp.get(node.val)) {
                if(distance[adj] > (node.key + weight)) {
                    distance[adj] = node.key + weight
                    pq.add(adj, distance[adj])
                }
            }
        }
        return distance
        
    }
    
}

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
