let n = 3;
let edges = [
    [1, 2],
    [1, 3],
    [2, 3],
];

gp = new Graph(n, edges);
gp.deleteEdge(2, 3);
gp.print();

function Graph(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.adjMatrix = null;
    this.print = function () {
        for (let row of this.adjMatrix) {
            console.log(row);
        }
    };
    this.makeGraph = function () {
        //make matrix
        this.adjMatrix = new Array(this.nodes + 1);
        for (let i = 0; i <= this.nodes; i++) {
            this.adjMatrix[i] = new Array(this.nodes + 1).fill(0);
        }
        for (let [x, y] of edges) {
            this.adjMatrix[x][y] = 1;
        }
    };
    this.deleteEdge = function (x, y) {
        this.adjMatrix[x][y] ? (this.adjMatrix[x][y] = 0) : null;
    };
    this.makeGraph();
}
