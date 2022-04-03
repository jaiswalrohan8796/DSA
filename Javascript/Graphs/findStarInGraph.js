//https://leetcode.com/problems/find-center-of-star-graph/submissions/

var findCenter = function (edges) {
    function graph() {
        this.adjacencyList = {};
    }
    graph.prototype.addEdge = function (source, dest) {
        if (!this.adjacencyList[source]) {
            this.adjacencyList[source] = [];
        }
        if (!this.adjacencyList[dest]) {
            this.adjacencyList[dest] = [];
        }
        if (!this.adjacencyList[source].includes(dest)) {
            this.adjacencyList[source].push(dest);
        }
        if (!this.adjacencyList[dest].includes(source)) {
            this.adjacencyList[dest].push(source);
        }
    };
    graph.prototype.print = function () {
        console.log(this.adjacencyList);
    };
    graph.prototype.findStar = function () {
        for (let node in this.adjacencyList) {
            if (this.adjacencyList[node].length == n) {
                return node;
            }
        }
    };
    let n = edges.length;
    let gp = new graph();
    for (let edge of edges) {
        gp.addEdge(edge[0], edge[1]);
    }
    gp.print();
    return gp.findStar();
};

// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1
