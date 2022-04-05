//https://leetcode.com/problems/keys-and-rooms/submissions/

var canVisitAllRooms = function (rooms) {
    let n = rooms.length;
    let GP = {};
    for (let i = 0; i < n; i++) {
        GP[i] = rooms[i];
    }
    function bfs(vertex) {
        let queue = [];
        unlocked[vertex] = 1;
        queue.push(vertex);
        while (queue.length != 0) {
            let currVertex = queue.shift();
            for (let adjV of GP[currVertex]) {
                if (!(adjV in unlocked)) {
                    unlocked[adjV] = 1;
                    queue.push(adjV);
                }
            }
        }
    }
    let unlocked = {};
    bfs(0);
    return Object.keys(unlocked).length == n;
};


// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation: 
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.

//Intuition
//Use BFS traversal as going forward we'll unlock child rooms.
//Unvisited nodes are the ones which are not unlocked, so compare visited length with no.of vertexes in rooms