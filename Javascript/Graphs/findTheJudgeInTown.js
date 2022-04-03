//https://leetcode.com/problems/find-the-town-judge/submissions/

var findJudge = function (n, trust) {
    if (trust.length == 0 && n <= 1) {
        return 1;
    }
    if (trust.length == 0 && n > 1) {
        return -1;
    }
    function Graph() {
        this.adjList = {};
    }

    Graph.prototype.addEdge = function (s, d) {
        if (!this.adjList[s]) {
            this.adjList[s] = [];
        }
        if (!this.adjList[d]) {
            this.adjList[d] = [];
        }
        if (!this.adjList[s].includes(d)) {
            this.adjList[s].push(d);
        }
    };
    Graph.prototype.print = function () {
        console.log(this.adjList);
    };
    Graph.prototype.findJudge = function (vertex, n) {
        let emptyVertex = [];
        for (let node in this.adjList) {
            if (this.adjList[node].length == 0) {
                emptyVertex.push(node);
            }
        }
        console.log("emptyVertex", emptyVertex);
        for (let empty of emptyVertex) {
            let count = 0;
            for (let node in this.adjList) {
                console.log(this.adjList[node]);
                if (this.adjList[node].includes(Number(empty))) {
                    count++;
                }
            }
            if (count == n - 1) {
                return empty;
            }
        }
        return -1;
    };
    gp = new Graph();
    for (let edge of trust) {
        gp.addEdge(edge[0], edge[1]);
    }
    gp.print();
    return gp.findJudge(trust[0][0], n);
};

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
