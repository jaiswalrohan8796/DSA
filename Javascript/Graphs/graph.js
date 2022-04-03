//GRAPH IMPLEMENTATION

function Graph() {
    this.adjacencyList = {}; //{ "2":[2,4], "2":[1,3].... }
}
// add a vertex
Graph.prototype.addVertex = function (vertex) {
    if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
    }
};
// add an edge
Graph.prototype.addEdge = function (source, dest) {
    if (!this.adjacencyList[source]) {
        this.addVertex(source);
    }
    if (!this.adjacencyList[dest]) {
        this.addVertex(dest);
    }
    if (!this.adjacencyList[source].includes(dest))
        this.adjacencyList[source].push(dest);
    if (!this.adjacencyList[dest].includes(source))
        this.adjacencyList[dest].push(source);
};
// remove an edge
Graph.prototype.removeEdge = function (source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
        (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
        (vertex) => vertex !== source
    );
};
// reomove a vertex
Graph.prototype.removeVertex = function (vertex) {
    while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
};

Graph.prototype.printList = function () {
    console.log(this.adjacencyList);
};

// BFS
Graph.prototype.bfs = function (vertex) {
    let res = [];
    let visited = {};
    visited[vertex] = true;
    let queue = [vertex];
    while (queue.length != 0) {
        let currVertex = queue.shift();
        res.push(currVertex);
        for (let adjacentNodes of this.adjacencyList[currVertex]) {
            if (!(adjacentNodes in visited)) {
                visited[adjacentNodes] = 1;
                queue.push(adjacentNodes);
            }
        }
    }
    return res;
};

// DFS Non-recursive approach
Graph.prototype.dfs = function (vertex) {
    let res = [];
    let visited = {};
    visited[vertex] = true;
    let stack = [vertex];
    while (stack.length != 0) {
        let currVertex = stack.pop();
        res.push(currVertex);
        for (let adjacentNodes of this.adjacencyList[currVertex]) {
            if (!(adjacentNodes in visited)) {
                visited[adjacentNodes] = true;
                stack.push(adjacentNodes);
            }
        }
    }
    return res;
};

//DFS Recursive approach
Graph.prototype.dfsRecursive = function (vertex) {
    let res = [];
    let visited = {};
    adjacencyList = this.adjacencyList;
    function recursive(vertex, adjacencyList) {
        visited[vertex] = 1;
        res.push(vertex);
        for (let adjacentNodes of adjacencyList[vertex]) {
            if (!(adjacentNodes in visited)) {
                recursive(adjacentNodes, adjacencyList);
            }
        }
    }
    recursive(vertex, this.adjacencyList);
    return res;
};

//DFS Post order : - in recusive approach save child before saving self node
Graph.prototype.dfsPostOrder = function (vertex) {
    let res = [];
    let visited = {};
    adjacencyList = this.adjacencyList;
    function recursive(vertex, adjacencyList) {
        visited[vertex] = 1;
        for (let adjacentNodes of adjacencyList[vertex]) {
            if (!(adjacentNodes in visited)) {
                recursive(adjacentNodes, adjacencyList);
            }
        }
        res.push(vertex);
    }
    recursive(vertex, this.adjacencyList);
    return res;
};

G = new Graph();
G.addVertex(1);
G.addVertex(2);
G.addVertex(3);
G.addVertex(4);
G.addEdge(1, 2);
G.addEdge(1, 4);
G.addEdge(2, 1);
G.addEdge(2, 3);
G.addEdge(3, 2);
G.addEdge(3, 4);
G.addEdge(3, 5);
G.addEdge(4, 1);
G.addEdge(4, 3);
G.addEdge(5, 3);
G.addEdge(5, 6);
G.addEdge(5, 7);
G.addEdge(6, 5);
G.addEdge(7, 5);

console.log(G.bfs(1));
console.log(G.dfs(1));
console.log(G.dfsPostOrder(1));
console.log(G.dfsRecursive(1));
