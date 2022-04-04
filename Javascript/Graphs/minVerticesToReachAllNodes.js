//https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/submissions/

var findSmallestSetOfVertices = function (n, edges) {
    let res = [];
    let degree = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        degree[edges[i][1]] += 1;
    }
    degree.forEach((deg, i) => {
        if (deg == 0) {
            res.push(i);
        }
    });
    return res;
};

// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].

//Intuition
//Minimum no.of nodes to connect all other nodes is equal to all the nodes having zero incoming edges
