//https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions

class Solution {
    //Function to find minimum time required to rot all oranges.
    orangesRotting(grid) {
        function getNeigh(row, col) {
            let res = [];
            let pos = [
                [row + 1, col],
                [row - 1, col],
                [row, col + 1],
                [row, col - 1],
            ];
            for (let val of pos) {
                if (isValidAndFresh(val[0], val[1])) {
                    res.push([val[0], val[1]]);
                }
            }
            return res;
        }
        function isValidAndFresh(row, col) {
            return (
                row >= 0 &&
                row < grid.length &&
                col >= 0 &&
                col < grid[0].length &&
                grid[row][col] == 1
            );
        }
        // code here
        let que = new Queue();
        let fresh = 0;
        let steps = -1;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    fresh += 1;
                }
                if (grid[i][j] == 2) {
                    que.enqueue([i, j]);
                }
            }
        }
        while (que.length > 0) {
            steps += 1;
            let size = que.length;
            //console.log(que)
            for (let k = 0; k < size; k++) {
                let curr = que.dequeue();
                for (let nei of getNeigh(curr[0], curr[1])) {
                    fresh -= 1;
                    grid[nei[0]][nei[1]] = 2;
                    que.enqueue([nei[0], nei[1]]);
                }
            }
        }
        return fresh == 0 ? steps : -1;
    }
}

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}
