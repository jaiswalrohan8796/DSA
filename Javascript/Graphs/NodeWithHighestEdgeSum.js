//https://leetcode.com/problems/node-with-highest-edge-score/

var edgeScore = function(edges) {
    let gp = {}

    for(let i = 0; i < edges.length; i++) {
        if(!gp[edges[i]]) gp[edges[i]] = 0
        gp[edges[i]] += i

    }
    let maxi = 0
    let maxKey = null
    for(let key in gp) {
        if(gp[key] > maxi) {
        maxi = gp[key]
        maxKey = Number(key)
        }
    }
    return maxKey
};




