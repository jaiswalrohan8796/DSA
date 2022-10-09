function Graph(directed = false) {
    this.directed = directed;
    this.adj = new Map();
}

Graph.prototype.print = function () {
    console.log(this.adj);
};

Graph.prototype.addNode = function (node) {
    if (!this.adj.has(node)) {
        this.adj.set(node, []);
    }
};

Graph.prototype.addEdge = function (x, y) {
    //check x node
    if (!this.adj.has(x)) {
        this.adj.set(x, []);
    }
    //add x -> y
    this.adj.get(x).push(y);
    //check y node
    if (!this.adj.has(y)) {
        this.adj.set(y, []);
    }
    //if undirected, add y -> x
    if (!this.directed) {
        this.adj.get(y).push(x);
    }
};

Graph.prototype.deleteEdge = function (x, y) {
    if (!this.adj.has(x) || !this.adj.has(y)) return false;
    //delete x -> y
    let x_pos = this.adj.get(x).indexOf(y);
    if (x_pos > -1) this.adj.get(x).splice(x_pos, 1);
    //if undirected, delete y -> x
    if (!this.directed) {
        let y_pos = this.adj.get(y).indexOf(x);
        if (y_pos > -1) this.adj.get(y).splice(y_pos, 1);
    }
};

Graph.prototype.BFS = function(node) {
    let output = []
    let visited = new Map()
    let queue = [node]
    while(queue.length > 0) {
        let curr = queue.shift()
        visited.set(curr, 1)
        output.push(curr)
        for(let adj of this.adj.get(curr)) {
            if(!visited.has(adj)) {
                visited.set(adj, 1)
                queue.push(adj)
            }
        }
    }
    console.log(`BFS -> ${output}`)
    return output
}


Graph.prototype.DFS = function(node) {
    let output = []
    let visited = new Map()
    let stack = [node]
    while(stack.length > 0) {
        let curr = stack.pop()
        visited.set(curr, 1)
        output.push(curr)
        for(let adj of this.adj.get(curr)) {
            if(!visited.has(adj)) {
                visited.set(adj, 1)
                stack.push(adj)
            }
        }
    }
    console.log(`DFS -> ${output}`)
    return output
}

gp = new Graph();
gp.addEdge(1, 2);
gp.addEdge(1, 3);
gp.addEdge(2, 3);
gp.print();
gp.BFS(1)
gp.DFS(1)
