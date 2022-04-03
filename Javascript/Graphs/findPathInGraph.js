//https://leetcode.com/problems/find-if-path-exists-in-graph/submissions/

var validPath = function (n, edges, source, destination) {
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
    graph.prototype.findPath = function (start, dest) {
        let queue = [start];
        let visited = {};
        visited[start] = 1;
        while (queue.length != 0) {
            let vertex = queue.shift();
            if (vertex == dest) {
                return true;
            }
            for (let adjN of this.adjacencyList[vertex]) {
                if (!(adjN in visited)) {
                    visited[adjN] = 1;
                    queue.push(adjN);
                }
            }
        }
        return false;
    };
    let gp = new graph();
    for (let edge of edges) {
        gp.addEdge(edge[0], edge[1]);
    }
    return gp.findPath(source, destination);
};

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
