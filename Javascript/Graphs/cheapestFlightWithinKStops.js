//https://leetcode.com/problems/cheapest-flights-within-k-stops/description/


//Standard BFS => TLE :(

var findCheapestPrice = function(n, flights, src, dst, k) {
    let G = new Map()
    for(let edge of flights) {
        if(!G.has(edge[0])) G.set(edge[0], [])
        if(!G.has(edge[1])) G.set(edge[1], [])
        G.get(edge[0]).push([edge[1], edge[2]])
    }
    let stops = -1
    let cost = Infinity
    let que = new MyQueue()
    que.enqueue([src, 0])
    while(que.length > 0) {
        let size = que.length()
        for(let i = 0; i < size; i++) {
            let [curr, currCost] = que.dequeue()
            if(curr == dst) {
                cost = Math.min(cost, currCost)
            }
            for(let [nei, w] of G.get(curr)) {
                if((currCost + w) > cost) {
                    continue
                }
                else {
                    que.enqueue([nei, currCost + w])
                }
            }
        }
        stops += 1
        if(stops > k) break
    }
    return cost == Infinity ? -1 : cost
};
